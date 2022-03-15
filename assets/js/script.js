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
var inputTasks = function () {
  //gets text value after user clicks off textarea
  $(".dailyPlans").on("blur", function () {
    inputText = $(this).val();
    console.log(inputText);
  });
};

var saveTasks = function () {
  $(".btn").on("click", function (event) {
    hour = $(this).parent().parent().attr("hourBlock");
    localStorage.setItem(hour, inputText);
  });
};

var loadTasks = function () {
  //var updateHour = localStorage.getItem("hour");
  //var updateText = localStorage.getItem(JSON.stringify(inputText));
  //var timeBlockEl = $(".timeBlock").attr("id");
  $(".dailyPlans").each(function (eachId) {
    var eachId = $(this).attr("id");
    //console.log(eachId);
    var updateHour = localStorage.getItem(eachId);
    console.log(updateHour);
    if (updateHour) {
      $("#" + eachId).text(updateHour);
    }
  });
};

setBlockColors();
inputTasks();
saveTasks();
loadTasks();
