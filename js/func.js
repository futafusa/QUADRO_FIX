//author: tatsuhico SAKAI
//web: www.tatsuhicosakai.com

(function($){
	$.fn.roll = function(options){
		$(this).each(function(){
			$(this).hover(
			function(){
				$(this).attr('src',$(this).attr("src").replace(/^(.+)(\..+)$/,"$1_on$2"))
			}, function(){
				$(this).attr('src',$(this).attr("src").replace(/^(.+)_on(\..+)$/, "$1$2"))
			});
		});
		return this;
	};
	
	$.fn.op = function(options){
		var o = $.extend({
			speed: 150,
			opacity: 0.7
		}, options)
		
		$(this).each(function(){
			if($.browser.msie) {
				$(this).hover(
				function(){
					$(this).fadeTo(o.speed, o.opacity, function(){ this.style.removeAttribute("filter"); });
				}, function(){
					$(this).fadeTo(o.speed, 1.0, function(){ this.style.removeAttribute("filter"); });
				});
			} else {
				$(this).hover(
				function(){
					$(this).fadeTo(o.speed, o.opacity);
				}, function(){
					$(this).fadeTo(o.speed, 1.0);
				});
			}
		});
		return this;
	};
})(jQuery);

// requenstAnimationFrame
window.requestAnimationFrame = (function() {
	return	window.requestAnimationFrame		||
			window.webkitRequestAnimationFrame	||
			window.mozRequestAnimationFrame		||
			window.oRequestAnimationFrame		||
			window.msRequestAnimationFrame		||
			function(callback, element) {
				window.setTimeout(callback, 1000/60);
			};

})();

// smooth scroll
function smoothScroll(target) {
	$('html, body').stop().animate({
		scrollTop: target
	}, 1000, 'easeInOutQuart');
}
