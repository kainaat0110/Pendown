const express = require('express');
const ShareThought = require('../models/ShareYourThoughtsModel');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const PostQ = require('../models/PostyourQuestion');

// API NO 1 :- To store the thoughts in the database
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

// API NO 2 :- To store the questions in the database
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

// API NO 3:- Retireve the data from the tables 
router.get('/getsharethoughts', async (req, res) => {
  try {
    // Retrieve all thoughts from the database
    const thoughts = await ShareThought.find();
    res.status(200).json(thoughts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API NO 4:- Retrieve the Questions
router.get('/getQuestion', async (req, res) => {
  try {
    // Retrieve all thoughts from the database
    const question = await PostQ.find();
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
