$(document).ready(function(){
	$('.toggle-page').click(function(){
		var id = $(this).data('toggle');
		console.log(id);
		$('.page-element').removeClass('active');
		$(id).addClass('active');
		$(window).trigger('resize');
	});
});