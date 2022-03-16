//sets current date using luxon library
var DateTime = luxon.DateTime;
var currentDate = DateTime.now().toFormat("MMM dd, yyyy");
var currentHour = DateTime.now().hour;

//displays current date at top of scheduler
$("#currentDay").text(currentDate);

var inputText;
var hour;

//function to set timeblocks to color based on current hour
var setBlockColors = function () {
  $(".timeBlock").each(function () {
    var hourBlock = $(this).attr("hourBlock");
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
    if (hourBlock == currentHour) {
      $(this).addClass("present");
    } else if (hourBlock < currentHour) {
      $(this).addClass("past");
    } else if (hourBlock > currentHour) {
      $(this).addClass("future");
    }
  });
};
//ceates blur effect when textarea is selected
var inputTasks = function () {
  //gets text value after user clicks off textarea
  $(".dailyPlans").on("blur", function () {
    inputText = $(this).val();
  });
};
//saves tasks to local storage on button click
var saveTasks = function () {
  $(".btn").on("click", function (event) {
    hour = $(this).parent().attr("hourBlock");
    localStorage.setItem(hour, inputText);
  });
};
//set each time slot to data saved in local storage
var loadTasks = function () {
  $(".dailyPlans").each(function (eachId) {
    var eachId = $(this).attr("id");
    var updateHour = localStorage.getItem(eachId);
    //if there is data in local storage, update on screen
    if (updateHour) {
      $("#" + eachId).text(updateHour);
    }
  });
};

//call functions
setBlockColors();
inputTasks();
saveTasks();
loadTasks();
