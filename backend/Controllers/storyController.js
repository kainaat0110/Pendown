const Story = require('../Models/Story');

// Create a new story
exports.createStory = async (req, res) => {
  try {
    const { profileId, content, tags } = req.body;
    const story = new Story({ profile: profileId, content, tags });
    await story.save();
    res.status(201).json(story);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all stories
exports.getStories = async (req, res) => {
  try {
    const stories = await Story.find().populate('profile', 'name');
    res.status(200).json(stories);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Like a story
exports.likeStory = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    story.likes += 1;
    await story.save();
    res.status(200).json(story);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
