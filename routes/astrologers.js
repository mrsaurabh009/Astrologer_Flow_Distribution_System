const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Astrologer = require('../models/Astrologer');


// GET all astrologers
// GET all astrologers
router.get('/list', async (req, res) => {
    try {
      const astrologers = await Astrologer.find();
      res.json(astrologers);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  

// POST new astrologer
router.post(
    '/create',
    [
      check('name', 'Name is required').not().isEmpty(),
      check('email', 'Valid email is required').isEmail(),
      check('phone', 'Phone number must be 10 digits').isLength({ min: 10, max: 10 }),
      check('experience', 'Experience is required').not().isEmpty(),
      check('specialization', 'Specialization is required').not().isEmpty()
    ],
    async (req, res) => {
      const errors = validationResult(req);
      
      // If validation fails
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      try {
        const { name, email, phone, experience, specialization } = req.body;
  
        // Check if astrologer with same email already exists
        const existingAstrologer = await Astrologer.findOne({ email });
        if (existingAstrologer) {
          return res.status(400).json({ message: 'Astrologer with this email already exists' });
        }
  
        const newAstrologer = new Astrologer({
          name,
          email,
          phone,
          experience,
          specialization
        });
  
        await newAstrologer.save();
  
        res.status(201).json({
          message: 'Astrologer created successfully',
          astrologer: newAstrologer
        });
  
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
      }
    }
  );
  

// PATCH toggle top astrologer
router.patch('/:id/toggle-top', async (req, res) => {
  const astrologer = await Astrologer.findById(req.params.id);
  if (!astrologer) return res.status(404).json({ error: 'Not found' });

  astrologer.isTopAstrologer = !astrologer.isTopAstrologer;
  await astrologer.save();
  res.json(astrologer);
});

// DELETE /api/astrologers/:id
router.delete('/:id', async (req, res) => {
    try {
      const deletedAstrologer = await Astrologer.findByIdAndDelete(req.params.id);
      if (!deletedAstrologer) {
        return res.status(404).json({ message: 'Astrologer not found' });
      }
      res.json({ message: 'Astrologer deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });

module.exports = router;
