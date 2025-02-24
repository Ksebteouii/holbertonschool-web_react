import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$(document).ready(function () {
  $('body').append('<button id="start-btn">Click here to get started</button>');
  $('body').append('<p id="count"></p>');

  let count = 0;
  $('#start-btn').on('click', _.debounce(() => {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }, 500));
});