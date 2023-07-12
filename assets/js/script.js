$(function () {

let timeDisplayEl = $('.current_time');

// handle displaying the time

function displayTime() {
    let now = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(now);
  }
  setInterval(displayTime, 1000);

/* setInterval(function() {
let now= dayjs();
$('.current_time').text(now.format('MMMM D, YYYY, h:mm:ss a'));
}, 1000);
*/






})



