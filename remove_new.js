var $newPlay,
	killAfter = 5000, // milliseconds after which we kill the timer
	timer,
	timeout;

getIt();

if($newPlay.length === 0){
	timer = setInterval(getIt,250);
	timeout = setTimeout(killTimer,killAfter);
}

function getIt(){
	var selector = "#gbzc .gbt .gbts .gbsup";
	$newPlay = $(selector);
	if($newPlay.length == 0){
		$newPlay = $('#canvas_frame').contents().find(selector);
	}
	if($newPlay.length > 0){
		killTimer();	
		goJuice();
	}
}

function killTimer(){
	timer && clearInterval(timer);
	timeout && clearTimeout(timeout);
}

function goJuice(){
	$newPlay.each(function(){
		if($(this).text() === 'NEW'){
			$(this).remove();
		}
	});
}