const User = require('../models/User');
const { getWeightedAstrologer } = require('../services/distributionService');

const assignUserToAstrologer = async (req, res) => {
  try {
    const { name } = req.body;
    const astrologer = await getWeightedAstrologer();

    const user = new User({
      name,
      assignedAstrologer: astrologer._id,
    });

    await user.save();
    astrologer.assignedCount += 1;
    await astrologer.save();

    res.status(201).json({ user, astrologer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { assignUserToAstrologer };
