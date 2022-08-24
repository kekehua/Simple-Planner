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
$("#1111").val(localStorage.getItem("11"));
$("#121").val(localStorage.getItem("12"));
$("#111").val(localStorage.getItem('13'));
$("#22").val(localStorage.getItem("14"));
$("#33").val(localStorage.getItem("15"));
$("#44").val(localStorage.getItem("16"));
$("#55").val(localStorage.getItem("17"));
$("#66").val(localStorage.getItem("18"));

row.on('click', '.saveBtn', saveTask);

function time(){

    var time = new Date().getHours();
    console.log(time);
    if (time = row.children().attr("id")){
        row.addClass("present");
        row.removeClass("future");
        row.removeClass("past");
    }
    if (time > row.children().attr("id")){
        row.addClass("past");
        row.removeClass("present");
        row.removeClass("future");
    }
    if (time = row.children().attr("id")){
        row.addClass("future");
        row.removeClass("present");
        row.removeClass("past");
    }
}
time();