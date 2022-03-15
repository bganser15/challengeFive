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
    var hourBlock = $(this).attr("id");
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
    hour = $(this).parent().parent().attr("id");
    localStorage.setItem(hour, inputText);
  });
};

var loadTasks = function () {
  //var updateHour = localStorage.getItem("hour");
  //var updateText = localStorage.getItem(JSON.stringify(inputText));
  //var timeBlockEl = $(".timeBlock").attr("id");
  $(".timeBlock").each(function () {
    var eachId = $(this).attr("id");
    //console.log(eachId);
    var updateHour = localStorage.getItem(eachId);
    console.log(updateHour);
    if (updateHour) {
      $("#" + eachId).val(updateHour);
    }
  });
};

//create blur function to input into textarea done
//on save button click set time block hour and plans into an object
//on save button click push that current object into locaql storage
//create load tasks function to stringify data and display on page
setBlockColors();
inputTasks();
saveTasks();
loadTasks();
