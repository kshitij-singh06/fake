const express = require('express');
const router = express.Router();
const { handleScrapeRequest } = require('../controllers/scrapeController');
router.post('/', handleScrapeRequest);
module.exports = router;
