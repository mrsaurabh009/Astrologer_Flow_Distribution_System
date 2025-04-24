const Astrologer = require('../models/Astrologer');

const getWeightedAstrologer = async () => {
  const astrologers = await Astrologer.find({});
  const weightedList = [];

  astrologers.forEach(ast => {
    const weight = ast.isTopAstrologer ? 3 : 1;
    for (let i = 0; i < weight; i++) {
      weightedList.push(ast);
    }
  });

  const random = Math.floor(Math.random() * weightedList.length);
  return weightedList[random];
};

module.exports = { getWeightedAstrologer };
