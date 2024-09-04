const express = require('express');
const router = express.Router();
const { createStory, getStories, likeStory } = require('../Controllers/storyController');

router.post('/', createStory);
router.get('/', getStories);
router.post('/:id/like', likeStory);

module.exports = router;
