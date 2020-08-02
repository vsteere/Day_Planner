
//defining variables to interact with JS
var date = document.querySelector("#currentDay");

//defining variable to use with moment.js using military time(24 hour clock) per definitions in moment.js documentation
var rightNow = moment().format("dddd, MMMM Do YYYY kkmm");


//pushes the date from moment.js to HTML and "hours" statement at the end
date.innerText=rightNow + " hours";


//pulls the hour of the current time in 24 hour format to use in the hourly schedule
var currentTime = moment().format("HH");
console.log(currentTime);

//converts the time to an integer so it can be used in an if statement
var currentTimeInt = parseInt(currentTime);
console.log(currentTimeInt);

//assigns a data atribute to each of the rows and assigning a time using moment.js. referenced MDN to select the "data-" attribute
$("#9").attr("data-moment", moment("09", "kk").format("HH"));
$("#10").attr("data-moment", moment("10", "kk").format("HH"));
$("#11").attr("data-moment", moment("11", "kk").format("HH"));
$("#12").attr("data-moment", moment("12", "kk").format("HH"));
$("#13").attr("data-moment", moment("13", "kk").format("HH"));
$("#14").attr("data-moment", moment("14", "kk").format("HH"));
$("#15").attr("data-moment", moment("15", "kk").format("HH"));
$("#16").attr("data-moment", moment("16", "kk").format("HH"));
$("#17").attr("data-moment", moment("17", "kk").format("HH"));

//this checks if the data time attribute works as intended
console.log(currentTime===("#15"));

//these different checks for lines 36-42 are me working through the initial logic set-up to make sure it works
//they set the stage for the code below
var eventTime = $("#9").attr("data-moment");
console.log(eventTime);
eventtimeInt = parseInt(eventTime);
console.log(eventtimeInt);

console.log(currentTimeInt===eventtimeInt);
console.log(currentTimeInt>eventtimeInt)


// this works but I'd need to do it for every single row; a loop would work better
// if (currentTimeInt>eventtimeInt) {
//     $("#9").addClass("past");

// };
//this for loop is a more elegant way to do the above work. It cycles the i between 9 and 17 limiting it to the worktime hours
for (var i = 9; i<18; i++)
{
    //this variable allows the cycling of the data-moment attribute for all of time slots
    var scheduleTime = $("#" + i).attr("data-moment");
    var scheduletimeInt = parseInt(scheduleTime);

    //these statements pull the apropriate CSS class depending on if it's in the past, present, or future
    if (currentTimeInt>scheduletimeInt) {
        $("#" + i).addClass("past")
    }
    else if (currentTimeInt<scheduletimeInt) {
        $("#" + i).addClass("future")
    }
    else {
        $("#" + i).addClass("present")
    }
};


