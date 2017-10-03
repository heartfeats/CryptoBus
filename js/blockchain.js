$(document).ready(function() {
  $("#quiz1").children().click(function() {
    var choice = parseInt($(this).find('input:radio').val());
    if (choice === 3) {
      $("#answer1").text("Correct!");
    } else {
      $("#answer1").text("Try Again..");
    }
  });
  $("#quiz2").children().click(function() {
    var choice = parseInt($(this).find('input:radio').val());
    if (choice === 3) {
      $("#answer2").text("Correct!");
    } else {
      $("#answer2").text("Try Again..");
    }
  });
  $("#quiz3").children().click(function() {
    var choice = parseInt($(this).find('input:radio').val());
    if (choice === 3) {
      $("#answer3").text("Correct!");
    } else {
      $("#answer3").text("Try Again..");
    }
  });
  $("#quiz4").children().click(function() {
    var choice = parseInt($(this).find('input:radio').val());
    if (choice === 3) {
      $("#answer4").text("Correct!");
    } else {
      $("#answer4").text("Try Again..");
    }
  });$("#quiz5").children().click(function() {
    var choice = parseInt($(this).find('input:radio').val());
    if (choice === 3) {
      $("#answer5").text("Correct!");
    } else {
      $("#answer5").text("Try Again..");
    }
  });
});

// function Question(question, answers, answer) {
//   this.question = question;
//   this.answers = answers;
//   this.answer = answer;
// }
//
// var q1 = new Question(
//   "What is a Blockchain?",
//   ["Bitcoin","A Distributed Ledger","A Decentralised Currency","A Spreadsheet"],
//   3);
// var q2 = new Question(
//   "What makes transactions on the blockchain secure and tamperproof?",
//   ["The Node Application installed on users computer", "The network connection status", "It isn't. Transactions can be tampered with.", "A Cryptographic Hash Function"],
//   4);
// var q3 = new Question(
//   "What could blockchain potentially be used for?",
//   ["Cryptocurrency","Used for Banking","Distrupt Insurance Industry","All of the above"],
//   4);
// var q4 = new Question(
//   "The Consensus Mechanism (Algorithm) allows users to connect to other nodes on the network.",
//   ["True","False"],
//   2);
// var q5 = new Question(
//   "An Investor could own shares of a business by participating in an ICO.",
//   ["True","False"],
//   2);
//
// $(document).ready(function() {
//
// var quizArray = [q1, q2, q3, q4, q5];
// quizArray.forEach(function() {
//   for (var i=1; i<=5; i++) {
//     $("#modal-body").html(
//     "<div class='modal-dialog'>
//       <div class='row'>
//         <h3><span class='col-md-1 label label-warning qid'>""+i+"</span><span class='col-md-9 qtext'>"+What is a Blockchain?+"</span></h3>
//       </div>
//     </div>
//     <div class="modal-body">
//       <div class="quiz" id="quiz"1" data-toggle="buttons">
//         <label class="btn btn-lg btn-primary btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="1">Bitcoin</label>
//         <label class="btn btn-lg btn-primary btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="2">A Distributed Ledger</label>
//         <label class="btn btn-lg btn-primary btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="3">A Decentralised Currency</label>
//         <label class="btn btn-lg btn-primary btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="4">A Spreadsheet</label>
//       </div>
//     </div>
//     <div class="modal-footer text-muted">
//       <h3 id="answer1"></h3>
//     </div>
//   }
// });
// });
