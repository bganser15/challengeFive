var DateTime = luxon.DateTime;
var currentDate = DateTime.now().toFormat("MMM dd, yyyy");
var currentHour = DateTime.now().hour;
//displays current date at top of scheduler
$("#currentDay").text(currentDate);
schedule = {
  textHour: [],
  plans: [],
};
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

setBlockColors();
//storeTask();
saveTask();
