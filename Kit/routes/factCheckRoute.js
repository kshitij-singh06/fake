const express = require('express');
const router = express.Router();
const { handleFactCheck } = require('../controllers/factCheckController');
router.post('/', handleFactCheck);
module.exports = router;
