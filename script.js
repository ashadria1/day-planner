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

/* Once the DOM is ready to be manipulated, this if-else statement runs to get items based on the hour in local storage if they were previously saved. */
$(document).ready(function () {
  if (!localStorage.getItem("workingHours")) {
    refreshDayPlans(workingHours);
  } else {
    refreshDayPlans(JSON.parse(localStorage.getItem("workingHours")));
  }
});

//This pulls the date and time from moment and displays it in h6 header in the Jumbotron.
$("#date-today h6").text(
  moment().format("dddd") + ", " + moment().format("MMMM Do YYYY")
);

/*This for loop contains the logic that determines if the hour in question is a past, present, or future hour based on moment data, and assigns a class that will be used in CSS styling to determine colors for past, present, and future hours. */
let counter = 1;
for (const property in workingHours) {
  let textEntry = "#text-entry" + counter;
  $(textEntry).text(workingHours[property]);
  let timeId = "#time" + counter;
  let presentHour = moment().hour();
  let timeString = $(timeId).text();
  let timeNumber = militaryTime(timeString);
  if (timeNumber < presentHour) {
    $(textEntry).addClass("past-hour");
  } else if (timeNumber > presentHour) {
    $(textEntry).addClass("future-hour");
  } else {
    $(textEntry).addClass("present-hour");
  }
  counter++;
}

/* This function saves whatever is input in the text area in local storage when the "save" button is clicked. */
$("button").click(function () {
  value = $(this).siblings("textarea").val();
  hourString = $(this).siblings("div").text();
  saveSchedule(hourString, value);
});

//This function switches 12-hour time to 24-hour time so moment can use it.
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

//This function parses the data received so that it can be saved as a string in local storage.
function saveSchedule(hourString, val) {
  if (!localStorage.getItem("workingHours")) {
    initializeLocalStorage();
  }
  let workHours = JSON.parse(localStorage.getItem("workingHours"));
  workHours[hourString] = val;
  saveToLocalStorage(workHours);
}

//This function refreshes the saved data in local storage.
function refreshDayPlans(dayObject) {
  $(".calendar-row").each(function (index) {
    let res = $(this).children("div");
    $(this).children("textarea").text(dayObject[res.text()]);
  });
}
