$(document).ready(function(){

	if ($(window).width() < 768) {
		$('.swapping-contents').each(function(i, item){
			$(this).children('.first-element').before($(this).children('.second-element'));
		});
	}

	$('.index-item').click(function(){
		$('.index-item').parent().siblings().removeClass('active');
		$(this).parent().addClass('active');
	});
	
	$(window).resize(function(){
		if ($(window).width() < 768) {
			$('.swapping-contents').each(function(i, item){
				$(this).children('.first-element').before($(this).children('.second-element'));
			});
		} else{
			$('.swapping-contents').each(function(){
				$(this).children('.second-element').before($(this).children('.first-element'));
			});
		}
	});

	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html, body').animate({scrollTop:target.offset().top}, 1000);
					return false;
				}
			}
		});
	});

});