$(function () {
    var currentDayEl = $("#currentDay");
    var currentDayTime = dayjs().format("dddd, MMMM D");
    var saveBtn = $(".saveBtn");
    var textArea = $(".description");
  
    // Display the current date in the header
    currentDayEl.text(currentDayTime);
  
    // Get the current hour in military time (24hr period)
    var currentHour = dayjs().hour();
  
    for (let i = 9; i < 18; i++) {
      var timeBlock = $("#hour-" + i);
  
      if (i === currentHour) {
        timeBlock.addClass("present");
      } else if (currentHour > i) {
        timeBlock.addClass("past");
      } else {
        timeBlock.addClass("future");
      }
    }
  
    // Retrieve and display user input from local storage
    textArea.each(function (index, element) {
      var hour = $(element).parent().attr("id");
      var event = localStorage.getItem(hour);
  
      console.log(event);
      $(element).val(event);
    });
  
    // Save user input to local storage when save button is clicked
    function saveEvent(event) {
      var currentButton = $(event.target);
      var textArea = currentButton.siblings("textarea");
      var parentId = currentButton.parent().attr("id");
      localStorage.setItem(parentId, textArea.val());
    }
  
    saveBtn.on("click", saveEvent);
  });
  