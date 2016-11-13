$(document).ready(function(){
	$('.nav li').each(function(){
		//$(this).css({left:})
	});
  $('.nav li').mouseover(function(){
  	$('.bg').css({
  		width:$(this).outerWidth()
  	});
  	$('.bg').stop().animate({
  		left:$(this).position().left,
  	});
  })
  
  $('.nav').mouseout(function(){
  		$('.bg').css({
  		width:48,
  	});
  	$('.bg').stop().animate({
  		left:0
  	});
  })

});