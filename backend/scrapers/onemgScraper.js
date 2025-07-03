const axios = require('axios');
const cheerio = require('cheerio');

async function get1mgReviews(productName) {
    if (!productName || !productName.trim()) return [];
    const sanitized = encodeURIComponent(productName.trim());
    const searchUrl = `https://www.1mg.com/search/all?name=${sanitized}`;

    try {
        const { data: searchData } = await axios.get(searchUrl, {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
        });
        const $ = cheerio.load(searchData);
        const relativeLink = $('div.style__product-box___3oEU6 a').first().attr('href') ||
                             $('div.style__horizontal-card___1Zwmt a').first().attr('href');
        const fullLink = relativeLink ? `https://www.1mg.com${relativeLink}` : null;
        if (!fullLink) return [];

        const { data: productData } = await axios.get(fullLink, {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
        });
        const $$ = cheerio.load(productData);
        const reviews = [];

        $$('#reviews div.ReviewCards__review-card___3Z733').each((_, el) => {
            const name = $$(el).find('div.ReviewCards__name___2ION7.ReviewCards__bold___1Zpa7').text().trim();
            const review = $$(el).find('div.ReviewCards__review-description___WoLdZ').text().trim();
            if (name && review) {
                reviews.push({ name, review });
            }
        });

        return reviews;
    } catch (err) {
        console.error('1mg scrape error:', err.message);
        return [];
    }
}

module.exports = { get1mgReviews };