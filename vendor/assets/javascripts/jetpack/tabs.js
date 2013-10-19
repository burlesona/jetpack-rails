// Jetpack Namespace
if( typeof Jetpack == 'undefined' ) {
  Jetpack = {};
}

// Init options:
// options -
// wrapper: defaults to '.tab-wrapper'
// nav: defaults to '.tabs'
// viewport: defaults to '.viewport'
Jetpack.tabs = {
	views: [],
	init: function(options) {
    if(typeof options == 'undefined' ) {
      var options = {};
    }
    if(typeof options.wrapper == 'undefined'){
      options.wrapper = '.tab-wrapper';
    }
    if(typeof options.nav == 'undefined'){
      options.nav = '.tabs';
    }
    if(typeof options.viewport == 'undefined'){
      options.viewport = '.viewport';
    }
    this.bind(options);
	},
	bind: function(options) {
		var self = this;
		$(options.wrapper).each(function(i,el){
			self.views.push(new Jetpack.TabView(el,options));
		});
	}
};

// Pills alias, calls tabs with different default options
// options -
// wrapper: defaults to '.pill-wrapper'
// nav: defaults to '.pills'
// viewport: defaults to '.viewport'
Jetpack.pills = {
	init: function(options) {
    if(typeof options == 'undefined' ) {
      var options = {};
    }
    if(typeof options.wrapper == 'undefined'){
      options.wrapper = '.pill-wrapper';
    }
    if(typeof options.nav == 'undefined'){
      options.nav = '.pills';
    }
    if(typeof options.viewport == 'undefined'){
      options.viewport = '.viewport';
    }
    Jetpack.tabs.bind(options);
	}
};


Jetpack.TabView = function(selector,options) {
	this.$el = $(selector);
	this.$tabs = this.$el.find(options.nav);
	this.$view = this.$el.find(options.viewport);
	this.bind();

	var firstID = this.$tabs.find('a').first().attr('href');
	this.setView(firstID);
};

Jetpack.TabView.prototype = {
	bind: function() {
		var self = this;
		this.$tabs.on('click','a',function(event){
			// Ignore regular links
			var id = $(this).attr('href');
			if( id.charAt(0) == '#' ) {
				event.preventDefault();
				self.setView( id );
			}
		});
	},
	setView: function(id) {
		this.$tabs.find('a').removeClass('active');
		this.$tabs.find('a[href='+id+']').addClass('active');
		this.$view.children().removeClass('active');
		this.$view.find(id).addClass('active');
	}
};
