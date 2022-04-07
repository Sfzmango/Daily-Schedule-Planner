var currentHour = moment().hour();
var today = moment().format("dddd, MMM Do");
$("#currentDay").text(today);

console.log("Time = " + currentHour);

function check9am() {
    if (currentHour > 9) {
        $("#9amBox").addClass("past")
    } else if (currentHour === 9) {
        $("#9amBox").addClass("present")
    } else {
        $("#9amBox").addClass("future")
    };
};

function check10am() {
    if (currentHour > 10) {
        $("#10amBox").addClass("past")
    } else if (currentHour === 10) {
        $("#10amBox").addClass("present")
    } else {
        $("#10amBox").addClass("future")
    };
};


function check11am() {
    if (currentHour > 11) {
        $("#11amBox").addClass("past")
    } else if (currentHour === 11) {
        $("#11amBox").addClass("present")
    } else {
        $("#11amBox").addClass("future")
    };
};


function check12pm() {
    if (currentHour > 12) {
        $("#12pmBox").addClass("past")
    } else if (currentHour === 12) {
        $("#12pmBox").addClass("present")
    } else {
        $("#12pmBox").addClass("future")
    };
};


function check1pm() {
    if (currentHour > 13) {
        $("#1pmBox").addClass("past")
    } else if (currentHour === 13) {
        $("#1pmBox").addClass("present")
    } else {
        $("#1pmBox").addClass("future")
    };
};


function check2pm() {
    if (currentHour > 14) {
        $("#2pmBox").addClass("past")
    } else if (currentHour === 14) {
        $("#2pmBox").addClass("present")
    } else {
        $("#2pmBox").addClass("future")
    };
};


function check3pm() {
    if (currentHour > 15) {
        $("#3pmBox").addClass("past")
    } else if (currentHour === 15) {
        $("#3pmBox").addClass("present")
    } else {
        $("#3pmBox").addClass("future")
    };
};


function check4pm() {
    if (currentHour > 16) {
        $("#4pmBox").addClass("past")
    } else if (currentHour === 16) {
        $("#4pmBox").addClass("present")
    } else {
        $("#4pmBox").addClass("future")
    };
};


function check5pm() {
    if (currentHour > 17) {
        $("#5pmBox").addClass("past")
    } else if (currentHour === 17) {
        $("#5pmBox").addClass("present")
    } else {
        $("#5pmBox").addClass("future")
    };
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

// var task9am = document.querySelector(".task9am");
// var task10am = document.querySelector(".task10am");
// var task11am = document.querySelector(".task11am");
// var task12pm = document.querySelector(".task12pm");
// var task1pm = document.querySelector(".task1pm");
// var task2pm = document.querySelector(".task2pm");
// var task3pm = document.querySelector(".task3pm");
// var task4pm = document.querySelector(".task4pm");
// var task5pm = document.querySelector(".task4pm");



$(".saveBtn1").on("click", function (event) {
    event.preventDefault();

    //targets the nearby textbox
    var textEl = ($(this)).parent().prev().children([0]);

    localStorage.setItem("task9am", textEl);
});










// $("#9amBox").text(window.localStorage.getItem("tasks"))
