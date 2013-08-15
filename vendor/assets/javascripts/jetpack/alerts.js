$(function() {
	$('.alert-message[data-persist=false]').delay(2000).slideUp();
	$('.alert-message[data-persist=true]').append('<a href="#" class="close">x</a>');
	$('.alert-message[data-persist=true] a.close').click( function( event ) {
		$(this).parent().slideUp();
		event.preventDefault();
	});
});
