const Question = require('../Models/Question');

// Create a new question
exports.createQuestion = async (req, res) => {
  try {
    const { profileId, title, content, tags } = req.body;
    const question = new Question({ profile: profileId, title, content, tags });
    await question.save();
    res.status(201).json(question);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all questions
exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.find().populate('profile', 'name');
    res.status(200).json(questions);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Answer a question
exports.answerQuestion = async (req, res) => {
  try {
    const { profileId, content } = req.body;
    const question = await Question.findById(req.params.id);
    question.answers.push({ profile: profileId, content });
    await question.save();
    res.status(200).json(question);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Like an answer
exports.likeAnswer = async (req, res) => {
  try {
    const question = await Question.findById(req.params.questionId);
    const answer = question.answers.id(req.params.answerId);
    answer.likes += 1;
    await question.save();
    res.status(200).json(answer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
