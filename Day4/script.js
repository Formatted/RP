// // JavaScript File
// var song = "asd";

// document.querySelector('h2').textContent = song;
var n = 0;
var number = 1;
var cnt = 0;
var string = "";
n = prompt("Give me a number");

while (cnt < n) {
    if (cnt === n) {
        string = string + "<p>" + number + "</p>" + "<hr>";
    } else {
        string = string + "<p>" + number + "," + "</p>";
    }
    cnt += 1;
    number += 1;
}

document.querySelector('div').innerHTML = string;
