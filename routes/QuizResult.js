const express = require('express');
const router = express.Router();
const QuizResultSchema = require('../models/QuizSchema');

router.post('/submit', async (req, res) => {


  const { name, department, score } = req.body;
  const quizResult = new QuizResultSchema({ name, department, score });

  const existingResult = await QuizResultSchema.findOne({ name });
  if (existingResult) {
    return res.status(400).json({ message: 'Name already exists Cannot Submit Quiz' });
  }
  else{
 
    await quizResult.save();
    res.json({ message: 'Quiz submitted successfully' });
  }
});

router.get('/results', async (req, res) => {
  const results = await QuizResultSchema.find({ score: { $gt: 8 } });
  res.json(results);
});

module.exports = router;