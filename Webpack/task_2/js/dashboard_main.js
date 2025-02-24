import $ from 'jquery';
import '../css/main.css'; // Import the CSS file
import logo from '../assets/holberton-logo.jpg'; // Import the logo image

$(document).ready(function () {
  // Add the logo element
  $('body').prepend('<div id="logo"></div>');

  // Add the paragraphs
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<p>Copyright - Holberton School</p>');
});