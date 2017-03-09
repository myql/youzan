var $protectionTitle=$(".protection-slogan"),
titleTop=$protectionTitle.offset().top;
$(window).on('scroll',function(){
	var windowTop=$(window).scrollTop();
	if(windowTop>titleTop){
		$protectionTitle.addClass('protection-fix');
	}else {
		$protectionTitle.removeClass('protection-fix');
	}
	
})