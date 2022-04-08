// gets the current day and time using moment.js and outputs it into the page.
var currentHour = moment().hour();
var today = moment().format("dddd, MMM Do");
$("#currentDay").text("Today is: " + today);
var currentTime = moment().format("h:mm A");
$("#currentHour").text("Currently, it is: " + currentTime);

//check all time boxes individually and assign a style accordingly to the time.
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

// executes the functions mentioned above
check9am();
check10am();
check11am();
check12pm();
check1pm();
check2pm();
check3pm();
check4pm();
check5pm();

//saves textarea input on save button click
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    //targets the nearby textbox
    var textEl = ($(this)).parent().prev().children([0]);
    //targets the nearby textbox id
    var textId = ($(this)).parent().prev().children([0]).attr("id");
    console.log(textEl);
    console.log(textId);
    localStorage.setItem(textId, textEl.val());
});

// grabs information from local storage for the specific id and returns it into the textboxes.
var task9amLS = localStorage.getItem("task9am");
var task9am = $("#task9am").val();
$(".task9").text(task9amLS);
var task10amLS = localStorage.getItem("task10am");
var task10am = $("#task10am").val();
$(".task10").text(task10amLS);
var task11amLS = localStorage.getItem("task11am");
var task11am = $("#task11am").val();
$(".task11").text(task11amLS);
var task12pmLS = localStorage.getItem("task12pm");
var task12pm = $("#task12pm").val();
$(".task12").text(task12pmLS);
var task1pmLS = localStorage.getItem("task1pm");
var task1pm = $("#task1pm").val();
$(".task1").text(task1pmLS);
var task2pmLS = localStorage.getItem("task2pm");
var task2pm = $("#task2pm").val();
$(".task2").text(task2pmLS);
var task3pmLS = localStorage.getItem("task3pm");
var task3pm = $("#task3pm").val();
$(".task3").text(task3pmLS);
var task4pmLS = localStorage.getItem("task4pm");
var task4pm = $("#task4pm").val();
$(".task4").text(task4pmLS);
var task5pmLS = localStorage.getItem("task5pm");
var task5pm = $("#task5pm").val();
$(".task5").text(task5pmLS);
