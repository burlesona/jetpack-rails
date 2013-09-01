$(function() {
	$('.flash-message[data-persist=false]').delay(2000).slideUp();
	$('.flash-message[data-persist=true]').append('<a href="#" class="close">x</a>');
	$('.flash-message[data-persist=true] a.close').click( function( event ) {
		event.preventDefault();
    $(this).parent().slideUp();
	});
});
