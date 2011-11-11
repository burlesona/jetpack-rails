/*
* Skeleton Tabs Remix
* Converting to a jQuery function that can be called
* .tabs() or .pills()
* on any selector.
*
* Based on:
* Skeleton V1.1
* Copyright 2011, Dave Gamache
* www.getskeleton.com
* Free to use under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 8/17/2011
*/

(function($) {
	$.fn.tabs = $.fn.pills = function() {
		var selector = $(this);
		
		selector.each( function(i) {
			//Get all tabs
			var tab = $(this).find('> li > a');
			tab.click(function(e) {
	
				//Get Location of tab's content
				var contentLocation = $(this).attr('href');
	
				//Let go if not a hashed one
				if(contentLocation.charAt(0)=="#") {
	
					e.preventDefault();
	
					//Make Tab Active
					tab.removeClass('active');
					$(this).addClass('active');
	
					//Show Tab Content & add active class
					$(contentLocation).show().addClass('active').siblings().hide().removeClass('active');
	
				}
			});
		});
	}
})(jQuery);