$(document).ready(function(){
	function weather(){
	$.ajax('http://api.apixu.com/v1/current.json?key=ba18251dc3724b3dbac134244192907&q=Moscow').done(function(data){
		let temp = data.current.temp_c;
		let temp_name = data.current.condition.text;
		$('.weather').text(temp_name);
		$('.weather_temp').text(temp + ' ' + '°C');
	});
}

setInterval(weather,1000);	
});



