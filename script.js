

$(document).ready(function (){
    // Event listener
    $('#current-date').text(moment().format('MMMM Do YYYY, h:mm a'));
    $(".parallax").parallax();
})