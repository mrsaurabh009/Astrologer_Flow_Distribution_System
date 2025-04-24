const express = require('express');
const router = express.Router();
const { createAstrologer, toggleTopStatus } = require('../controllers/astrologerController');

router.post('/', createAstrologer);
router.put('/toggle/:id', toggleTopStatus);

module.exports = router;
