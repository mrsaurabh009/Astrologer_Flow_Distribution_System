const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  assignedAstrologer: { type: mongoose.Schema.Types.ObjectId, ref: 'Astrologer' },
});

module.exports = mongoose.model('User', userSchema);
