import $ from 'jquery';
import _ from 'lodash';

// Add elements to the body
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');

const button = $('<button>Click here to get started</button>');
$('body').append(button);

const counter = $('<p id="count"></p>');
$('body').append(counter);

$('body').append('<p>Copyright - Holberton School</p>');

// Click counter with debounce
let count = 0;
const updateCounter = () => {
    count++;
    $('#count').text(`${count} clicks on the button`);
};

button.on('click', _.debounce(updateCounter, 500));
