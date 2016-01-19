'use strict';

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var d = new Date();

var year = d.getFullYear();
var month = months[d.getMonth()];
var day = d.getDate();

function time() {
    var hour = d.getHours(),
        minutes = d.getMinutes();
    if (hour < 12 && hour > 0) {
        return hour + ': ' + minutes + ' AM';
    }
    if (hour > 12) {
        return (hour - 12) + ': ' + minutes + ' PM';
    }
    if (hour === 12) {
        return hour + ': ' + minutes;
    }
    if (hour === 0) {
        return (hour + 12) + ': ' + minutes + ' AM';
    }
}

var date =   ' ' + time() + month + ' ' + day + ', ' + year;
document.getElementById("date").innerHTML = date;