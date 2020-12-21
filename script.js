let workingHours = {
  "9 AM": "",
  "10 AM": "",
  "11 AM": "",
  "12 PM": "",
  "1 PM": "",
  "2 PM": "",
  "3 PM": "",
  "4 PM": "",
  "5 PM": "",
};

let counter = 1;
let timeId = "#time" + counter;
let presentHour = moment().hour();
let pastHour = moment().hour() - 1;
let futureHour = moment().hour + 1;
let timeString = $(timeId).text();
let workHours = JSON.parse(localStorage.getItem("workingHours"));
workHours[hourString] = val;

$("#date-today h6").text(
  moment().format("dddd") + ", " + moment().format("MMMM Do YYYY, h:mm:ss a")
);

function militaryTime(hourString) {
  switch (hourString) {
    case "9 AM":
      return 9;
    case "10 AM":
      return 10;
    case "11 AM":
      return 11;
    case "12 PM":
      return 12;
    case "1 PM":
      return 13;
    case "2 PM":
      return 14;
    case "3 PM":
      return 15;
    case "4 PM":
      return 16;
    case "5 PM":
      return 17;
  }
}

$(document).ready(function () {
  if (!localStorage.getItem("workingHours")) {
    refreshDayPlans(workingHours);
  } else {
    refreshDayPlans(JSON.parse(localStorage.getItem("workingHours")));
  }
});

function initializeLocalStorage() {
  localStorage.setItem("workingHours", JSON.stringify(workingHours));
}

