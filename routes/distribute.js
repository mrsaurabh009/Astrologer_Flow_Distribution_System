const express = require('express');
const router = express.Router();
const Astrologer = require('../models/Astrologer');

// POST /api/distribute
router.post('/', async (req, res) => {
  const usersToAssign = req.body.userCount || 1;

  const astrologers = await Astrologer.find();
  const topAstrologers = astrologers.filter(a => a.isTopAstrologer);
  const regularAstrologers = astrologers.filter(a => !a.isTopAstrologer);

  let assigned = [];

  for (let i = 0; i < usersToAssign; i++) {
    let candidateList = [...regularAstrologers];

    // Give top astrologers 2x chance
    if (topAstrologers.length > 0 && i % 2 === 0) {
      candidateList = [...candidateList, ...topAstrologers];
    }

    candidateList.sort((a, b) => a.currentLoad - b.currentLoad);

    const selected = candidateList[0];
    selected.currentLoad++;
    await selected.save();

    assigned.push({ userId: `user-${i + 1}`, assignedTo: selected.name });
  }

  res.json({ message: 'Users distributed', assigned });
});

module.exports = router;
