const Astrologer = require('../models/Astrologer');

const createAstrologer = async (req, res) => {
  const astrologer = new Astrologer(req.body);
  await astrologer.save();
  res.status(201).json(astrologer);
};

const toggleTopStatus = async (req, res) => {
  const { id } = req.params;
  const astrologer = await Astrologer.findById(id);
  astrologer.isTopAstrologer = !astrologer.isTopAstrologer;
  await astrologer.save();
  res.json(astrologer);
};

module.exports = { createAstrologer, toggleTopStatus };
