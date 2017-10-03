// Business Logic
function User(username, password) {
  this.username = username;
  this.password = password;
};

// user information will be lost upon redirect

// User Interface Logic
$(document).ready(function() {
  $('form#login').submit(function(event) {
    event.preventDefault();

    var usernameInput = $('input#username').val();
    var passwordInput = $('input#password').val();
    var newUser = new User(usernameInput, passwordInput);

    window.location = "homepage.html";

  });
});
