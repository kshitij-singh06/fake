// TruthScan API Server
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

// Route imports
const scrapeRoute = require('./routes/scrapeRoute');
const detectRoute = require('./routes/detectRoute');
const factCheckRoute = require('./routes/factCheckRoute');
const imageDetectRoute = require('./routes/imageDetectRoute');
const summarizeRoute = require('./routes/summarizeRoute');
const qaRoute = require('./routes/qaRoute');
const sentimentRoute = require('./routes/sentimentRoute');
const fusionRoute    = require('./routes/fusionRoute');

const HOST = '0.0.0.0';
const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/scrape', scrapeRoute);
app.use('/api/detect', detectRoute);
app.use('/api/factcheck', factCheckRoute);
app.use('/api/image-detect-ai', imageDetectRoute);
app.use('/api/summarize', summarizeRoute);
app.use('/api/qa', qaRoute);
app.use('/api/sentiment', sentimentRoute);
app.use('/api/fusion',    fusionRoute);

// Health check
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'OK', message: 'TruthScan API server is running' });
});

app.listen(PORT, HOST, () => {
  console.log(`[TruthScan API] Server running on ${HOST}:${PORT}`);
});
