const questionController = require("../controllers/question.controller.js");

// Schema for swagger
const getQuestionSchema = require("../../swagger/schema/GetQuestion.json");

const routes = [
  {
    method: "GET",
    url: "/api/question",
    schema: getQuestionSchema,
    handler: questionController.getQuestion,
  },
];

// Export the routes
module.exports = routes;
