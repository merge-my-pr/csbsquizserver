const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


const quizResultRouter = require('./routes/QuizResult');

const app = express();

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect("mongodb+srv://admin:1234@minidb.fj06imn.mongodb.net/?retryWrites=true&w=majority");
    console.log('db connected');
}

app.use(cors());
app.use(bodyParser.json());

app.use('/api', quizResultRouter);


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});