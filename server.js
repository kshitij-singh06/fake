const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from Kit/.env
dotenv.config({ path: path.join(__dirname, 'Kit', '.env') });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Import API routes from Kit
const scrapeRoute = require('./Kit/routes/scrapeRoute');
const detectRoute = require('./Kit/routes/detectRoute');
const factCheckRoute = require('./Kit/routes/factCheckRoute');
const imageDetectRoute = require('./Kit/routes/imageDetectRoute');
const summarizeRoute = require('./Kit/routes/summarizeRoute');
const qaRoute = require('./Kit/routes/qaRoute');
const sentimentRoute = require('./Kit/routes/sentimentRoute');

// API routes
app.use('/api/scrape', scrapeRoute);
app.use('/api/detect', detectRoute);
app.use('/api/factcheck', factCheckRoute);
app.use('/api/image-detect-ai', imageDetectRoute);
app.use('/api/summarize', summarizeRoute);
app.use('/api/qa', qaRoute);
app.use('/api/sentiment', sentimentRoute);

// Health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'TruthScan server is running' });
});

// Serve frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 5000; // Always use 5000 for the unified server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`TruthScan (Frontend + API) running on http://0.0.0.0:${PORT}`);
});
