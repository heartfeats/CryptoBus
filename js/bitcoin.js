$(document).ready(function() {
  $('#formOne').submit(function(event) {
    event.preventDefault();

    var principal = document.getElementById("principal").value;
    var time = document.getElementById("time").value; // no. of years
    var r = 81.71
    var result = document.getElementById("result");

    var A = (principal* Math.pow((1 + (r/(100))), (time)));

    result.innerHTML = "Potential value in " + time + " years: <br> <strong>$" + A.toFixed(2) +"</strong>";

  });
});
