# JETPACK

A sweet boostrap mashup for Rails applications. A much more comprehensive readme and demonstration page will be added in the future. For now, here are the basics:

## Installation

In your gemfile:

    gem 'jetpack-rails'

## SASS

To load the sass framework you have two options. First, if you want all the default settings:

    @import 'jetpack/presets';
    @import 'jetpack';

Second (recommended), if you want to define your own settings, paste the following into your manifest:

		// COLOR DEFINITIONS
		$light1: #EAEBEC;
		$light2: #9A9FA0;
		
		$dark1: #3C3E40;
		$dark2: #262728;
		
		$color1: #F4B84D;
		$color2: #E59013;
		
		$alt1: #4E7DF2;
		$alt2: #2C4A84;
		
		$success1: #D7EDC3;
		$success2: #68AF2F;
		
		$notice1: #FFFD7D;
		$notice2: #FFD939;
		
		$error1: #FFDCDC;
		$error2: #D64338;
		
		$white: #FFFFFF;
		$black: #000000;
		
		// TYPOGRAPHY DEFINITIONS
		$sans: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
		$serif: "Georgia", "Times", "Times New Roman", serif;
		$mono: "Monaco", "Andale Mono", "Courier New", monospace;
		
		$base_size: 13px;
		$base_weight: 400;
		$baseline: 18px;

		@import 'jetpack';
		
Then tweak it to your hearts content.

## Javascript

For javascript it's a bit simpler. In your manifest file:

	//= require 'jquery-rails'
  //= require 'jetpack'

-----

That's it. You can browse all the assets here on Github and see what they do. Again, I'll add more documentation in the future.
