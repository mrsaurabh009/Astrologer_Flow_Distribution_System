const mongoose = require('mongoose');

const astrologerSchema = new mongoose.Schema({
  name: String,
  isTopAstrologer: { type: Boolean, default: false },
  assignedCount: { type: Number, default: 0 },
  weight: { type: Number, default: 1 },
});

module.exports = mongoose.model('Astrologer', astrologerSchema);
