require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI('AIzaSyD0PzClDlnmpDuIpKqo3GJJ4Y8pVP6nz0U');
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

async function generateAISummary(reviews) {
    if (!Array.isArray(reviews) || reviews.length === 0) return 'No reviews to analyze.';
    const prompt = `Analyze all the reviews and make a 3–4 line report that if a user is buying, then with how much surety and under 
    what conditions; also mention when they should avoid buying.

Reviews:
${reviews.join('\n')}
`;

    try {
        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error('❌ Gemini AI Error:', error.message);
        return 'AI summarization failed.';
    }
}

module.exports = generateAISummary;