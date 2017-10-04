function Question(question, answers, correctAnswer) {
 this.question = question;
 this.answers = answers;
 this.correctAnswer = correctAnswer;
}

Question.prototype.eval = function(userAnswer) {
  return (userAnswer === this.correctAnswer);
}

Question.prototype.print = function() {
  this.answers.forEach(function(question) {
    $(".quiz").append(""+question+"");
  })
  )
}

var questionOne = new Question(
  "How many little pigs were there?",
  ["One", "Two", "Three"],
  "Three"
);

var allQuestions = [q1, q2, q3];
