const express = require('express');
const router = express.Router();
const { handleFusion } = require('../controllers/fusionController');
router.post('/', handleFusion);
module.exports = router;
