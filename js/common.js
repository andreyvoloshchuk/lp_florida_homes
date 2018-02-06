$(document).ready(function(){
	$('.black_bg').height($('body').height());
	$('#main .center .info button').on('click', function(){
		$('#main .center .send').fadeIn();
		$('.black_bg').removeClass('hidden');
	});
	$('#main .center .send .right span').on('click', function(){
		$('#main .center .send').fadeOut();
		$('.black_bg').addClass('hidden');
	});
	$('.black_bg').on('click', function(){
		$('#main .center .send').fadeOut();
		$('#main .center .thanks').fadeOut();
		$('.black_bg').addClass('hidden');
	});
	$('#main .center .send .right form .submit').on('click', function(e){
		e.preventDefault();
		$('#main .center .send').fadeOut();
		$('#main .center .thanks').fadeIn();
	});
	$('#main .center .thanks .right button').on('click', function(){
		$('#main .center .thanks').fadeOut();
		$('.black_bg').addClass('hidden');
	});
	$('#main .center .form .submit').on('click', function(e){
		e.preventDefault();
		$('#main .center .thanks').fadeIn();
		$('.black_bg').removeClass('hidden');
	});
});