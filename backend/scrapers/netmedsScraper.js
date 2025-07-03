const axios = require('axios');
const cheerio = require('cheerio');

async function getNetmedsReviews(productName) {
    if (!productName || !productName.trim()) return [];
    const sanitized = encodeURIComponent(productName.trim());
    const searchUrl = `https://www.netmeds.com/catalogsearch/result/${sanitized}/all`;

    try {
        const { data } = await axios.get(searchUrl, {
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        const $ = cheerio.load(data);
        const link = $('div.cat-item a.category_name').first().attr('href');
        const fullLink = link ? `https://www.netmeds.com${link}` : null;

        if (!fullLink) return [];

        const { data: productData } = await axios.get(fullLink, {
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });
        const $$ = cheerio.load(productData);
        const reviews = [];

        $$('.uvp_review_block').each((_, el) => {
            const name = $$(el).find('.uvp_reviewer_name').text().trim();
            const review = $$(el).find('.uvp_review_text').text().trim();
            if (name && review) {
                reviews.push({ name, review });
            }
        });

        return reviews;
    } catch (err) {
        console.error('Netmeds scrape error:', err.message);
        return [];
    }
}

module.exports = { getNetmedsReviews };