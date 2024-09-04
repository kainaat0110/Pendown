const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
  profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true },
  content: { type: String, required: true },
  tags: { type: [String], required: true },
  likes: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Story', StorySchema);
