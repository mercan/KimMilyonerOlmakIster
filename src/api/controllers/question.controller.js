const QuestionService = require("../../services/QuestionService.js");

// Get a random question from the database based on the difficulty
const getQuestion = async (req, res) => {
  const { difficulty } = req.query;
  // Difficulty is optional, if not passed in, it will be null
  const question = await QuestionService.getQuestion(difficulty);

  // If the question is not found, return a 400 error
  if (!question) {
    return res.status(400).send({
      statusCode: 400,
      message: "Question not found",
    });
  }

  return res.status(200).send({
    statusCode: 200,
    data: Array.isArray(question) ? question[0] : question,
  });
};

// Export the function
module.exports = {
  getQuestion,
};
