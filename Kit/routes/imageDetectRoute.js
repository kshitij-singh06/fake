const express = require('express');
const router = express.Router();
const { handleImageDetection } = require('../controllers/imageDetectController');
router.post('/', handleImageDetection);
module.exports = router;
