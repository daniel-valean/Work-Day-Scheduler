var todayDate = moment().format('YYYY-MM-DD, dddd');
$("#currentDay").html(todayDate);

$(document.ready(
    function () {
        $(".saveBtn").on("click", function () {
            var text = $(this).siblings(".description").val();
            var timeblockid = $(this).parent().attr("id");
            
            localStorage.setItem(timeblockid, text);})
        
        function timeTracker() {
        
        $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        
        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
    })
})