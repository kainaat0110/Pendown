const express = require('express');
const router = express.Router();
const { createQuestion, getQuestions, answerQuestion, likeAnswer } = require('../Controllers/questionController');

router.post('/', createQuestion);
router.get('/', getQuestions);
router.post('/:id/answer', answerQuestion);
router.post('/:questionId/answer/:answerId/like', likeAnswer);

module.exports = router;
