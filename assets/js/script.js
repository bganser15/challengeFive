//DateTime.now().toLocaleString()	//=>	"3/12/2022"

//DateTime.now().toFormat('MMMM dd, yyyy')	//=>	"March 12, 2022"

var DateTime = luxon.DateTime;
var currentDate = DateTime.now().toFormat("MMM dd, yyyy");
var currentHour = DateTime.now().hour;
//displays current dateat top of scheduler
$("#currentDay").text(currentDate);

var setBlockColors = function () {
  $(".timeBlock").each(function () {
    var hourBlock = $(this).attr("id");
    console.log($(this).attr("id"));
    console.log(currentHour);
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
    if (hourBlock == currentHour) {
      $(this).addClass("present");
      console.log("now");
    } else if (hourBlock < currentHour) {
      //$(this).removeClass("present");
      //$(this).removeClass("future");
      $(this).addClass("past");
    } else if (hourBlock > currentHour) {
      //$(this).removeClass("present");
      //$(this).removeClass("past");
      $(this).addClass("future");
    }
  });
};

setBlockColors();
