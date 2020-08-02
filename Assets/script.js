
//defining variables to interact with JS
var date = document.querySelector("#currentDay");

//defining variable to use with moment.js
var rightNow = moment().format("dddd, MMMM Do YYYY");


//pushes the date from moment.js to HTML
date.innerText=rightNow;

if()