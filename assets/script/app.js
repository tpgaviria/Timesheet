var name;
var role;
var startDate = null;
var rate = null;

$("#submit").on("click", function(event) {
  event.preventDefault();

var name = $("#name-input").val().trim();
var role = $("#role-input").val().trim();
var startDate = $("#startdate-input").val().trim();
var rate = $("#rate-input").val().trim();

// Console log each of the user inputs to confirm we are receiving them
console.log(name);
console.log(role);
console.log(startDate);
console.log(rate);

// Output all of the new information into the relevant HTML sections
$("#name-display").text(name);
$("#role-display").text(email);
$("#date-display").text(age);
$("#months-worked-display").text(comment);
