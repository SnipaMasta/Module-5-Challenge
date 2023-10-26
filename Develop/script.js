// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  //gets the current time
  var currentTime = dayjs();
  $("#time").text(currentTime.format("hh:mm:ss"));

//gets the current date
  var date = dayjs();
  $("#date").text(date.format("D MM, YYYY"));

  setInterval(function () {
    let date = dayjs();
    $('#date').text(date.format('MM/d/YYYY'))
    let currentTime = dayjs();
    $('#time').text(currentTime.format('hh: mm: ss'))
  }, 1000);

});

//variable for the current hour, which is used to change the color of the blocks with appropriate if statements
var hourX = dayjs().format('H');

if (hourX < 9) {
  $('#hour-9').addClass('neither')
}
if (hourX < 10) {
  $('#hour-10').addClass('neither')
}
if (hourX < 11) {
  $('#hour-11').addClass('neither')
}
if (hourX < 12) {
  $('#hour-12').addClass('neither')
}
if (hourX < 13) {
  $('#hour-13').addClass('neither')
}
if (hourX < 14) {
  $('#hour-14').addClass('neither')
}
if (hourX < 15) {
  $('#hour-15').addClass('neither')
}
if (hourX < 16) {
  $('#hour-16').addClass('neither')
}
if (hourX < 17) {
  $('#hour-17').addClass('neither')
}



if (hourX > 9) {
  $('#hour-9').addClass('past')
} else if (hourX == 9) {
  $('#hour-9').addClass('present')
} else {
  $('#hour-9').addClass('future')
}

if (hourX > 10) {
  $('#hour-10').addClass('past')
} else if (hourX == 10) {
  $('#hour-10').addClass('present')
} else {
  $('#hour-10').addClass('future')
}

if (hourX > 11) {
  $('#hour-11').addClass('past')
} else if (hourX == 11) {
  $('#hour-11').addClass('present')
} else {
  $('#hour-11').addClass('future')
}

if (hourX > 12) {
  $('#hour-12').addClass('past')
} else if (hourX == 12) {
  $('#hour-13').addClass('present')
} else {
  $('#hour-13').addClass('future')
}

if (hourX > 13) {
  $('#hour-13').addClass('past')
} else if (hourX == 13) {
  $('#hour-13').addClass('present')
} else {
  $('#hour-13').addClass('future')
}

if (hourX > 14) {
  $('#hour-14').addClass('past')
} else if (hourX == 14) {
  $('#hour-14').addClass('present')
} else {
  $('#hour-14').addClass('future')
}

if (hourX > 15) {
  $('#hour-15').addClass('past')
} else if (hourX == 15) {
  $('#hour-15').addClass('present')
} else {
  $('#hour-15').addClass('future')
}

if (hourX > 16) {
  $('#hour-16').addClass('past')
} else if (hourX == 16) {
  $('#hour-16').addClass('present')
} else {
  $('#hour-16').addClass('future')
}

if (hourX > 17) {
  $('#hour-17').addClass('past')
} else if (hourX == 17) {
  $('#hour-17').addClass('present')
} else {
  $('#hour-17').addClass('none')
}

