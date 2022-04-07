var currentHour = moment().hour();

console.log(currentHour);

var today = moment().format("dddd, MMM Do");
$("#currentDay").text(today);

function check9am() {
    if (currentHour.isBefore("9")) {
        $("#9am").addClass(".past")
    }
};

check9am();