//"let" works better than "var" for these purposes
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

//Once the DOM is ready to be manipulated, this if-else statement runs to get items in local storage if they were previously saved.
$(document).ready(function () {
  if (!localStorage.getItem("workingHours")) {
    refreshDayPlans(workingHours);
  } else {
    refreshDayPlans(JSON.parse(localStorage.getItem("workingHours")));
  }
});



let counter = 1;
let timeId = "#time" + counter;
let presentHour = moment().hour();
let pastHour = moment().hour() - 1;
let futureHour = moment().hour + 1;
let timeString = $(timeId).text();
let workHours = JSON.parse(localStorage.getItem("workingHours"));
workHours[hourString] = val;



//Once the DOM is ready to be manipulated, this if-else statement runs to get items in local storage if they were previously saved.
$(document).ready(function () {
  if (!localStorage.getItem("workingHours")) {
    refreshDayPlans(workingHours);
  } else {
    refreshDayPlans(JSON.parse(localStorage.getItem("workingHours")));
  }
});

//This pulls the date and time from moment and displays it in h6 header in the Jumbotron
$("#date-today h6").text(
  moment().format("dddd") + ", " + moment().format("MMMM Do YYYY")
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

//This function loads the correct data set and returns the result based on the hour.
function loadCorrectDataset() {
  var result = localStorage.getItem("workingHours");
  return result ? result : workingHours;
}

//This function initializes local storage based on the hour.
function initializeLocalStorage() {
  localStorage.setItem("workingHours", JSON.stringify(workingHours));
}

//This function saves data to local storage.
function saveToLocalStorage(dayObj) {
  localStorage.setItem("workingHours", JSON.stringify(dayObj));
}

  /*  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
  const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
  */

