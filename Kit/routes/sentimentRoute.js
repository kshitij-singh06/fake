const express = require('express');
const router = express.Router();
const { handleSentimentAnalysis } = require('../controllers/sentimentController');
router.post('/', handleSentimentAnalysis);
module.exports = router;
