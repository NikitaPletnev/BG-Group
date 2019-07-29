$(document).ready(function(){

function date(){	
	let date = new Date;
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let month = date.getMonth();
	let day = date.getDate();
	if (day < 10) {
    day = "0" + day;
    }
    if (month <10) {
    month = "0" + month;
    }
    if(minutes < 10){
    minutes = "0" + minutes;
    }

    let monthArr = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];

    $('.time').text(hours + ':' + minutes);
    $('.time_date').text(day + ' ' + monthArr[month-1]);
}
    setInterval(date,1000);
})