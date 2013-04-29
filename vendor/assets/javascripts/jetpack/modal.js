/*
 * Jetpack Modal
 * Super-Simple Modal Dialogs
 *
 * Inspired by jQuery Reveal Plugin 1.0
 */

$(function(){
	$('body').on('click', 'a[data-modal]', function (event) {
		event.preventDefault();
		var modalLocation = $(this).attr('data-modal');
		$('#' + modalLocation).modal();
	});

	$.fn.modal = function() {
		var modal = $(this);
		var modalBg = $('.modal_bg');

		if ( modalBg.length == 0 ) {
			modalBg = $('<div class="modal_bg"></div>').insertAfter(modal);
		}

		if( modal.not(':visible') ) {
			openModal();
		} else {
			closeModal();
		}

		function openModal() {
			modalBg.fadeIn();
			modal.fadeIn();
		}

		function closeModal() {
			modal.fadeOut();
			modalBg.fadeOut();
		}

		modalBg.click( function() {
			closeModal();
		});

		$('body').keyup( function (event) {
			if (event.which === 27) {
				closeModal();
			}
		});

		$('a.close_modal').click( function(event) {
			event.preventDefault();
			closeModal();
		});

	};
});
