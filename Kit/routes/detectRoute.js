const express = require('express');
const router = express.Router();
const { handleAIDetection } = require('../controllers/detectController');
router.post('/', handleAIDetection);
module.exports = router;
