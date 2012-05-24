// @author tatsuhico SAKAI

// requenstAnimationFrame
window.requestAnimationFrame = (function() {
	return	window.requestAnimationFrame||
	window.webkitRequestAnimationFrame	||
	window.mozRequestAnimationFrame		||
	window.oRequestAnimationFrame		||
	window.msRequestAnimationFrame		||
	function(callback, element) {
		window.setTimeout(callback, 1000 / 60);
	};

})();

// smooth scroll
function smoothScroll(target) {
	$('html, body').stop().animate({
		scrollTop: target
	}, 1000, 'easeInOutQuart');
}
