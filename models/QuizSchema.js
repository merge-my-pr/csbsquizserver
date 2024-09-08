const mongoose = require('mongoose');

const quizResultSchema = new mongoose.Schema({
  name: String,
  department: String,
  score: Number,
});

const QuizResult = mongoose.model('QuizResult', quizResultSchema);

module.exports = QuizResult;