$(function() {
	$('div.alert_message[data-persist=false]').delay(2000).slideUp();
	$('div.alert_message[data-persist=true]').append('<a href="#" class="close">x</a>');
	$('div.alert_message[data-persist=true] a.close').click( function( event ) {
		$(this).parent().slideUp();
		event.preventDefault();
	});
});