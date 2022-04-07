// var currentHour = moment().hour();
var currentHour = moment().hour();

console.log(currentHour);

var today = moment().format("dddd, MMM Do");
$("#currentDay").text(today);

function check9am() {
    if (currentHour > 9) {
        $("#9amBox").addClass("past")
    }
    else if (currentHour === 9) {
        $("#9amBox").addClass("present")
    }
    else {
        $("#9amBox").addClass("future")
    }
};

function check10am() {
    if (currentHour > 10) {
        $("#10amBox").addClass("past")
    }
    else if (currentHour === 10) {
        $("#10amBox").addClass("present")
    }
    else {
        $("#10amBox").addClass("future")
    }
};


function check11am() {
    if (currentHour > 11) {
        $("#11amBox").addClass("past")
    }
    else if (currentHour === 11) {
        $("#11amBox").addClass("present")
    }
    else {
        $("#11amBox").addClass("future")
    }
};


function check12pm() {
    if (currentHour > 12) {
        $("#12pmBox").addClass("past")
    }
    else if (currentHour === 12) {
        $("#12pmBox").addClass("present")
    }
    else {
        $("#12pmBox").addClass("future")
    }
};


function check1pm() {
    if (currentHour > 13) {
        $("#1pmBox").addClass("past")
    }
    else if (currentHour === 13) {
        $("#1pmBox").addClass("present")
    }
    else {
        $("#1pmBox").addClass("future")
    }
};


function check2pm() {
    if (currentHour > 14) {
        $("#2pmBox").addClass("past")
    }
    else if (currentHour === 14) {
        $("#2pmBox").addClass("present")
    }
    else {
        $("#2pmBox").addClass("future")
    }
};


function check3pm() {
    if (currentHour > 15) {
        $("#3pmBox").addClass("past")
    }
    else if (currentHour === 15) {
        $("#3pmBox").addClass("present")
    }
    else {
        $("#3pmBox").addClass("future")
    }
};


function check4pm() {
    if (currentHour > 16) {
        $("#4pmBox").addClass("past")
    }
    else if (currentHour === 16) {
        $("#4pmBox").addClass("present")
    }
    else {
        $("#4pmBox").addClass("future")
    }
};


function check5pm() {
    if (currentHour > 17) {
        $("#5pmBox").addClass("past")
    }
    else if (currentHour === 17) {
        $("#5pmBox").addClass("present")
    }
    else {
        $("#5pmBox").addClass("future")
    }
};


check9am();
check10am();
check11am();
check12pm();
check1pm();
check2pm();
check3pm();
check4pm();
check5pm();