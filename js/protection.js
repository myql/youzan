var $detail=$("#container .protection-details li");
console.log($detail);
$detail.on('click',function(){
	console.log(1);
	$detail.css({
		'border-bottom': '2px solid #ee0000',
		'color': '#ee0000'
	})
})