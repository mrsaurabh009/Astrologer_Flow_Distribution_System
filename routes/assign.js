const express = require('express');
const router = express.Router();
const { assignUserToAstrologer } = require('../controllers/assignController');

router.post('/', assignUserToAstrologer);

module.exports = router;
