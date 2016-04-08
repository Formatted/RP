// // JavaScript File
// var song = "asd";

// document.querySelector('h2').textContent = song;
var n = 0;
var number = 1;
var cnt = 0;
var string = "";
n = prompt("Give me a number");

var isEven = function(x) {
    if (x % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

while (cnt < n) {
    if (isEven(number)) {
    if (cnt === n - 1) {
        string = string + "<p class='even'>" + number + "</p>";
    } else {
        string = string + "<p class='even'>" + number + "," + "</p>" + "<hr>";
    }
    } else {
     if (cnt === n - 1) {
        string = string + "<p class='odd'>" + number + "</p>";
    } else {
        string = string + "<p class='odd'>" + number + "," + "</p>" + "<hr>";
    }   
    }
    cnt += 1;
    number += 1;
};

document.querySelector('div').innerHTML = string;

