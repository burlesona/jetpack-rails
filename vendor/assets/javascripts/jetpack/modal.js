// Modal Windows
if( typeof Jetpack == 'undefined' ) {
  Jetpack = {};
}

// Init options:
// trigger: (default a[data-modal])
// modalClass: (default: modal-window)
Jetpack.modal = {
  modals: {},
  init: function(options) {
    if(typeof options == 'undefined' ) {
      var options = {};
    }
    if(typeof options.trigger == 'undefined'){
      options.trigger = 'a[data-modal]';
    }
    if(typeof options.modalClass == 'undefined'){
      options.modalClass = '.modal-window';
    }
    this.bind(options);
  },
  bind: function(options) {
    var self = this;
    $(options.modalClass).each(function(i,el){
      self.modals[$(el).attr('id')] = new Jetpack.ModalWindow(el);
    });
    $(document.body).on('click',options.trigger, function(event) {
      event.preventDefault();
      modalID = $(this).data('modal');
      self.modals[modalID].show();
    });
  }
};

Jetpack.ModalWindow = function(selector, options) {
  this.$el = $(selector);
  this.$el.hide(); // In case it wasn't hidden already
  this.$bg = $('<div class="modal-bg"></div>');

  if( typeof options == 'undefined' ) { var options = {}; }
  if( typeof options.append == 'undefined' ) { options.append = false; }
  this.options = options;

  // Add Close Button if one isn't already present
  if(this.$el.find('.close-modal').length == 0) {
    this.$el.prepend('<a href="#" class="close-modal">X</a>');
  }
};

Jetpack.ModalWindow.prototype = {
  show: function() {
    this.$bg.appendTo('body');
    if(this.options.append){ this.$el.appendTo('body'); }
    this.$el.show();
    this.bind();
  },
  hide: function() {
    this.$el.hide();
    if(this.options.append){ this.$el.remove(); }
    this.$bg.remove();
    this.unbind();
  },
  bind: function() {
    var self = this;
    this.$el.on('click','.close-modal',function(event){
      event.preventDefault();
      self.hide();
    });
    $(document).on('keyup.modal',function(event){
      if(event.keyCode == 27) { self.hide(); }
    });
  },
  unbind: function() {
    this.$el.off('click');
    $(document).off('.modal');
  }
};
