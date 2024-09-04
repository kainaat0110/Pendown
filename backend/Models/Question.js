const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: { type: [String], required: true },
  likes: { type: Number, default: 0 },
  answers: [
    {
      profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true },
      content: { type: String, required: true },
      likes: { type: Number, default: 0 },
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Question', QuestionSchema);
