require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const NodeCache = require('node-cache');
const winston = require('winston');
const { get1mgReviews } = require('./scrapers/onemgScraper');
const { getNetmedsReviews } = require('./scrapers/netmedsScraper');
const generateAISummary = require('./aiUtils');

const app = express();
const PORT = process.env.PORT || 3000;
const cache = new NodeCache({ stdTTL: 3600 });

// Configure Winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'logs/app.log' }),
    new winston.transports.Console() // For terminal debugging
  ]
});

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Match your React app's port (e.g., Vite default)
  methods: ['GET', 'POST'],
  optionsSuccessStatus: 200
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Scraper configurations
const scrapers = [
  { name: '1mg', fn: get1mgReviews },
  { name: 'Netmeds', fn: getNetmedsReviews }
];

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the ReviewDekho API' });
});

app.post('/reviews', async (req, res) => {
  const { productName } = req.body;
  if (!productName || productName.trim() === '') {
    logger.error('No product name provided');
    return res.status(400).json({ summary: null, reviews: {}, product: null, error: 'Product name required' });
  }

  const cacheKey = `reviews:${productName.toLowerCase()}`;
  const cached = cache.get(cacheKey);
  if (cached) {
    logger.info(`Cache hit for ${productName}`);
    return res.json({ ...cached, error: null });
  }

  let allReviews = [];
  const reviewsBySource = {};

  try {
    logger.info(`Scraping reviews for ${productName}`);
    const results = await Promise.all(scrapers.map(async ({ name, fn }) => {
      try {
        const reviews = await fn(productName);
        logger.info(`Successfully scraped ${name}: ${reviews.length} reviews`);
        reviewsBySource[name] = reviews;
        return reviews.map(r => r.review).filter(Boolean);
      } catch (err) {
        logger.error(`Error scraping ${name}: ${err.message}`);
        reviewsBySource[name] = [{ name: 'Error', review: `Could not fetch ${name} reviews.` }];
        return [];
      }
    }));

    allReviews = results.flat();

    let summary = 'No reviews available for sentiment analysis.';
    if (allReviews.length > 0) {
      try {
        summary = await generateAISummary(allReviews);
      } catch (err) {
        logger.error(`Error generating AI summary: ${err.message}`);
        summary = 'AI summarization failed.';
      }
    }

    const response = { summary, reviews: reviewsBySource, product: productName, error: null };
    cache.set(cacheKey, response);
    return res.json(response);
  } catch (err) {
    logger.error(`API error: ${err.message}`);
    return res.status(500).json({ summary: null, reviews: reviewsBySource, product: productName, error: 'Internal server error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(`Unhandled error: ${err.message}`, { stack: err.stack });
  return res.status(500).json({ summary: null, reviews: {}, product: null, error: 'Internal server error' });
});

// Start server
const server = app.listen(PORT, () => {
  logger.info(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    logger.error(`Port ${PORT} is in use. Try a different port.`);
    process.exit(1);
  }
  logger.error(`Server error: ${err.message}`);
});