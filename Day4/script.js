// // JavaScript File
// var song = "asd";

// document.querySelector('h2').textContent = song;
var n = 0;
var number = 1;
var cnt = 0;
var string = "";
n = prompt("Give me a number");

while (cnt < n) {
  if (number % 2 == 0) {
    	if (cnt === n - 1) {
        string = string + "<p class=\"even\">" + number + "</p>" + "<hr>";
	    } else {
        string = string + "<p class=\"even\">" + number + "," + "</p>";
	    }
  } else {
  	  if (cnt === n - 1) {
        string = string + "<p class=\"odd\">" + number + "</p>" + "<hr>";
	    } else {
        string = string + "<p class=\"odd\">" + number + "," + "</p>";
	    }

  }


    cnt += 1;
    number += 1;
}

document.querySelector('div').innerHTML = string;
