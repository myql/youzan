var $protectionTitle=$(".protection-slogan"),
titleTop=$protectionTitle.offset().top,
$protectionLogan=$(".protection-logan");
$(window).on('scroll',function(){
	var windowTop=$(window).scrollTop();
	if(windowTop>titleTop){
		$protectionTitle.addClass('protection-fix');
		$protectionLogan.addClass('logan-change');
	}else {
		$protectionTitle.removeClass('protection-fix');
		$protectionLogan.removeClass('logan-change');
	}
	
})

var $functionList=$(".function-list"),
$detailTitle=$(".function-detail .detail-title li");
$detailTitle.on('click',function(){
	var $cur=$(this);
	var index=$cur.index();
	console.log(index);
	var windowTop=$(window).scrollTop();
	var functionTop=$functionList.eq(index).offset().top;
	
})

