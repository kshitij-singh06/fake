const express = require('express');
const router = express.Router();
const { handleQA } = require('../controllers/qaController');
router.post('/', handleQA);
module.exports = router;
