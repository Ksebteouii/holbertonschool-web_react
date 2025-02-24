import $ from 'jquery';
import '../css/main.css';
import logo from '../assets/holberton-logo.jpg';

$(document).ready(function () {
  $('body').prepend('<div id="logo"></div>');
  $('body').prepend('<h1>Holberton Dashboard</h1>');
  console.log('Init header');
});