const express = require('express');
const ShareThought = require('../models/ShareYourThoughtsModel');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const PostQ = require('../models/PostyourQuestion');

// Define the route for posting a thought
router.post('/sharethought',
  // Validate and sanitize input
  body('text').isString().withMessage('Text is required and must be a string'),
  body('isMostLiked').optional().isBoolean().withMessage('isMostLiked must be a boolean'),
  body('date').optional().isBoolean().withMessage('Date must be a boolean'),
  body('life').optional().isBoolean().withMessage('Life must be a boolean'),
  body('travel').optional().isBoolean().withMessage('Travel must be a boolean'),
  body('food').optional().isBoolean().withMessage('Food must be a boolean'),
  body('relationships').optional().isBoolean().withMessage('Relationships must be a boolean'),
  body('friends').optional().isBoolean().withMessage('Friends must be a boolean'),
  
  // Request handler
  async (req, res) => {
    // Extract validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Create a new thought
    const newThought = new ShareThought({
      text: req.body.text,
      isMostLiked: req.body.isMostLiked || false,
      date: req.body.date || false,
      life: req.body.life || false,
      travel: req.body.travel || false,
      food: req.body.food || false,
      relationships: req.body.relationships || false,
      friends: req.body.friends || false
    });

    try {
      // Save the new thought to the database
      const savedThought = await newThought.save();
      res.status(201).json(savedThought);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

router.post('/postQuestion',
  // Validate and sanitize input
  body('question').isString().withMessage('Question is required and must be a string'),
  body('life').optional().isBoolean().withMessage('Life must be a boolean'),
  body('travel').optional().isBoolean().withMessage('Travel must be a boolean'),
  body('food').optional().isBoolean().withMessage('Food must be a boolean'),
  body('friends').optional().isBoolean().withMessage('Friends must be a boolean'),
  body('relationship').optional().isBoolean().withMessage('Relationship must be a boolean'),

  // Request handler
  async (req, res) => {
    // Extract validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Create a new post
    const newPost = new PostQ({
      question: req.body.question,
      life: req.body.life || false,
      travel: req.body.travel || false,
      food: req.body.food || false,
      friends: req.body.friends || false,
      relationship: req.body.relationship || false
    });

    try {
      // Save the new post to the database
      const savedPost = await newPost.save();
      res.status(201).json(savedPost);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

module.exports = router;
