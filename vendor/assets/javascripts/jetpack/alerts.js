// Flash Message Handlder
if( typeof Jetpack == 'undefined' ) {
  Jetpack = {};
}

// Init options:
// selector: defaults to '.flash-message'
// options -
// delay: defaults to 2000ms
Jetpack.flashMessages = {
  init: function(selector, options) {
    if( typeof selector == 'undefined' ) {
      var selector = '.flash-message'
    }
    if( typeof options == 'undefined' ) {
      options = {delay: 2000}
    }
    this.$sel = $(selector);
    this.bind(options);
  },
  bind: function(options) {
    this.$sel.each( function(i,el){
      // If data-persist not set, or data-persist false, slideUp after delay
      if( typeof $(el).data('persist') == 'undefined' || $(el).data('persist') == false) {
        $(el).delay(options.delay).slideUp();
      }
      // Otherwise, slideUp when a.close is clicked
      else {
        // If a.close not already present, add it
        if(!$(el).find('a.close').length) {
          $(el).append('<a href="#" class="close">x</a>');
        }
        // Clear click binding to a.close in case it was already set, rebind to slideUp.
        $close = $(el).find('a.close');
        $close.off('click');
        $close.on('click',function(event){
          event.preventDefault();
          $(el).slideUp();
        });
      }
    });
  }
}
