var $protectionCarousel=$('.case-slogan .protection-carousel'),
$shopAhead=$('.case-slogan .shop-ahead'),
$shopBack=$('.case-slogan .shop-back'),
$caseDot=$('.case-slogan .case-dot li'),
$caseList=$('.case-slogan .protection-carousel .case-list');
var idx=0;
$shopAhead.on('click',function(){
	playPre();
})
$shopBack.on('click',function(){
	playNext();
})
$caseDot.on('click',function(){
	var $cur=$(this);
	var curIdx=$cur.index();
	if(curIdx<idx){
		playPre();
	}else if(curIdx>idx) {
		playNext();
	}
	console.log(curIdx);
})
var ifAnimate=false;
function playNext(idx){
	if(!ifAnimate){
		idx=idx||1;
		$caseList.animate({left:-idx},function(){
			
		})
	}
}