console.log('hi this is the right js file');



var name;
var role;
var startDate;
var rate;

$('#submit-button').on('click', function () {
  console.log('i was clicked');
  
  var name = ('<p>' + $("#name-input").val().trim() + '</p>');
  var role = $("#role-input").val().trim();
  var startDate = $("#startdate-input").val().trim();
  var rate = $("#rate-input").val().trim();
  
  // Console log each of the user inputs to confirm we are receiving them
  console.log(name);
  console.log(role);
  console.log(startDate);
  console.log(rate);
  
 
  // Output all of the new information into the relevant HTML sections
  $("#name-display").prepend(name);
  $("#role-display").text(role);
  $("#date-display").text(startDate);
  $("#monthly-rate-display").text(rate);
})