// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var localeSettings = {};
dayjs.locale(localeSettings);
//I think this delays execution of code until DOM loads

$(function () {
  var currentHour = dayjs().format('H');

  function hourlyColor() {
    $('.time-block').each(function () {
      var blockHour = parseInt(this.id);
      $(this).toggleClass('past', blockHour < currentHour);
      $(this).toggleClass('present', blockHour === currentHour);
      $(this).toggleClass('future', blockHour > currentHour);
    });
  }
  

function textEntry() {
  $('.saveBtn').on('click', function() {
    var key = $(this).parent().attr('id');
    var valur = $(this).siblings('.description').val();
    localStorage.setItem(key,value);
  });
}


  var currentTime = dayjs();
  $("#time").text(currentTime.format("hh:mm:ss"));

  var date = dayjs();
  $("#date").text(date.format("D MM, YYYY"));

  setInterval(function () {
    let date = dayjs();
    $('#date').text(date.format('MM/d/YYYY'))
    let currentTime = dayjs();
    $('#time').text(currentTime.format('hh: mm: ss'))
  }, 1000);

  textEntry();
  hourlyColor();
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


//dayjs.org
//getbootstrap.com
//jqueryui.com

