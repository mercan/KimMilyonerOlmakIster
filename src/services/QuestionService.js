const questionModel = require("../models/question.js");

class QuestionService {
  constructor() {
    this.questionModel = questionModel;
  }

  /**
   * @param {difficulty} difficulty - difficulty of the question passed in from the client side (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12)
   * @returns {Promise<questionModel>}
   * @description Get a random question from the database based on the difficulty
   */
  async getQuestion(difficulty) {
    if (difficulty) {
      const questions = await this.questionModel.find(
        { difficulty },
        { _id: 0 }
      );

      return questions[Math.floor(Math.random() * questions.length)];
    }

    return this.questionModel.aggregate([
      { $sample: { size: 1 } },
      { $project: { _id: 0 } },
    ]);
  }
}

// Export The Class Instance
module.exports = new QuestionService();
