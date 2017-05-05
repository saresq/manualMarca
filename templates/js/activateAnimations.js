$(document).ready(function(){
	
	//ACTIVATE ANIMATIONS ON SCROLL//
	
	var $window = $(window);

	$('.animated-item-container').each(function(){
		var hT = $(this).offset().top,
			//hH = $(this).outerHeight(),
			//wH = $window.height(),
			wS = $window.scrollTop();
		if (wS >= (hT - 50) && !$(this).hasClass('active-animation') && window.innerWidth > 768 ){
			$(this).addClass('active-animation');
		}
	});

	$(window).scroll(function(){
		var $window = $(window);
		$('.animated-item-container').each(function(){
			var hT = $(this).offset().top,
				//hH = $(this).outerHeight(),
				//wH = $window.height(),
				wS = $window.scrollTop();
			if (wS >= (hT - 50) && !$(this).hasClass('active-animation') && window.innerWidth > 768 ){
				$(this).addClass('active-animation');
			}
		});
	});

});