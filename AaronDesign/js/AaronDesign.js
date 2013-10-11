$(function(){
	initEvent();
});

function initEvent(){
	$(".item").hover(function(){
		$(this).find("a").children(".thumbtitle").hide();
	},function(){
		$(this).find("a").children(".thumbtitle").show();
	});

	$(".cardimg").hover(function(){
		//alert("d");
		$(this).stop().animate({"opacity":"0"},"fast");
	},function(){
		$(this).stop().animate({"opacity":"1"},"fast");
	});
}