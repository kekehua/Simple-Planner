var date = document.getElementById("currentDay");
date.innerHTML = new Date();
var row = $(".row");

function saveTask(event){
    var click = $(event.target);

    var desc = click.siblings(".description").val();
    var time = click.siblings().attr("id");
    console.log(time);
    localStorage.setItem(time,desc);
}

$("#77").val(localStorage.getItem("7"));
$("#88").val(localStorage.getItem("8"));
$("#99").val(localStorage.getItem("9"));
$("#101").val(localStorage.getItem("10"));
$("#111").val(localStorage.getItem("11"));
$("#121").val(localStorage.getItem("12"));
$("#131").val(localStorage.getItem('13'));
$("#141").val(localStorage.getItem("14"));
$("#151").val(localStorage.getItem("15"));
$("#161").val(localStorage.getItem("16"));
$("#171").val(localStorage.getItem("17"));
$("#181").val(localStorage.getItem("18"));

row.on('click', '.saveBtn', saveTask);

$(".row").each(function time(){

    var time = new Date().getHours();
    console.log($(this).children().attr("id"));
    console.log(JSON.stringify(time));
    
    if (parseInt(JSON.stringify(time)) == parseInt($(this).children().attr("id"))){
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
    }
    else if (parseInt(JSON.stringify(time)) > parseInt($(this).children().attr("id"))){
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
       } 
    else {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
    }
});

