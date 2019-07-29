$(function(){
   $.get('http://data.fixer.io/api/latest',
   	{'access_key':'7556a4a9e24d262b95e2bdc7193a5b65'},
   	function(response){
   	var eur = (response.rates.RUB).toFixed(2);
   	$('.eur').append( eur );
   	var s = response.rates.USD;
   	var usd = (eur/s).toFixed(2);
    $('.usd').append( usd );
   });
});