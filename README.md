# JETPACK

A sweet boostrap mashup for Rails applications. The philosophy is pretty simple, it should make building Rails apps go a lot faster.

I first was interested in this after seeing Twitter Bootstrap. Twitter Bootstrap is pretty inspiring, but it has some drawbacks that I didn't love:

1. It doesn't fit a lot of standard rails markup.
2. For that matter, you need to change a lot of your markup to really use it.
3. It's written in LESS, which I think is very cool, but isn't as "railsy" as SASS
4. It is mostly based on style definitions with only a few functions / mixins.
5. The JS is a little hard to hack, easy to break, and is very dependent on your use of their exact CSS.
6. All of the above mean it isn't very modular.

I felt that those were major issues for me, but the basic principle of having a bootstrap was clearly a great idea, so in the traditional open-source fashion I stole the pants off of Twitter Boostrap and then redid the whole thing a little differently. As I worked on that I found there were other libraries that I liked better than certain parts of TWB (especially Skeleton!), so I borrowed liberally from them as well.

In the end I compiled this library with the following goals:

1. Optimize for Rails
2. Be modular so people can just use the parts they like.
3. Mixins > Definitions -- make it easy to add standardized CSS to any markup.
4. Make the JS a little easier to wield.

I feel like I've accomplished those things for the most part. Of course, as far as I know I'm the only real user of this library, so all I can really say is it does what I want it to and I'm happy with it. I've built 5 sites with it, and it's saved me tons and tons of time.

The rest of the readme is an overview of how it works. These are just a few basic things, I'll add more as I have time, and as people express interest.

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
	
	$base_font: $sans;
	$base_size: 13px;
	$base_weight: 400;
	$baseline: 18px;

	@import 'jetpack';
		
Then tweak it to your heart's content.

## Javascript

For javascript it's a bit simpler. In your manifest file:

	//= require 'jquery-rails'
	//= require 'jetpack'

-----

That's it! To learn more about what the library does just browse through the vendor/assets directory. I'll add documentation over time as the library matures. For now here are a few useful examples:

## Fractionalize (Jetpack's Awesome Grid)

Grid-based designs are great, but there's one minor problem with them. Because a good CSS grid creates consistent visual alignment throughout a site, we want to make everything fit the grid, but when we're working with 12 or 16 columns what should we do if something on our page is just begging to be displayed in 3 columns, or 5?

The reality is we don't think in terms of a "3-column width", we think in terms of "1/4 of the page". So why don't we just spell it out like that? Well, in Jetpack we do. Any element can become a centered, full-width container, like so:

	div#wrapper { @include container; }
	
Once you're inside a container, just divide it up with fractions:

	// Makes a 3-column grid.
	div.column { @include grid(1, 3); }

You don't need to use .first or .last, or any other such nonsense. Just enclose each row of your layout in an outer container. Only the outermost page wrapper needs the container mixin, everything else will work. So, for instance, the following works perfectly, with no CSS needed for the `.row` div.

	<div class="row">
		<div class="column"></div>
		<div class="column"></div>
		<div class="column"></div>
	</div>
	<div class="row">
		<div class="column"></div>
		<div class="column"></div>
		<div class="column"></div>
	</div>

This works inside of gridded elements too, any logical subdivision of fractions will work. For instance, with the following SCSS:

	div.wrapper { @include container; }
	div.half { @include grid(1, 2); }
	div.quarter { @include grid(1, 4); }

This markup would do exactly what you'd expect.

	<div class="wrapper">
		<div class="row">
			<div class="half"></div>
			<div class="half">
				<div class="quarter"></div>
				<div class="quarter"></div>
			</div>
		</div>
		<div class="row">
			<div class="quarter"></div>
			<div class="quarter"></div>
			<div class="quarter"></div>
			<div class="quarter"></div>
		</div>
		<div class="row">
			<div class="quarter"></div>
			<div class="quarter"></div>
			<div class="half"></div>
		</div>
	</div>

You can use any fraction with the following denominators: 1, 2, 3, 4, 5, 6, 8*, 10, 12.

The grid is also responsive at three sizes: Desktop (1000px), Tablet (760px), and Mobile (320px). Tablet simply compresses the grid slightly, while mobile restacks everything as full-width.

*Note on eighths: The math that divides the grid results in a decimal when using eighth containers on desktop-width. However, Safari, Firefox, and Chrome seem to handle this with no problem. I don't use windows so I have not tested this extensively on IE. Just be aware.

## Headings

One of the major design challenges is to maintain consistent typography. With regard to headings, we can now use headers more semantically, having (for instance) many H1 elements on a single page: the main title, the title of every article, and the title of every comment, etc. Working with a semantic page structure, your CSS now has to have rules for many different sizes of the same header element. Yet, we want to maintain a consistent visual hierarchy. We can solve this problem pretty easily with SASS Mixins in Jetpack, like so:

	h1 { @include heading(1); }
	article h1 { @include heading(2); }
	article comment h1 { @include heading(3); }

## Use / Contribute

That's all the documentation I have time for at the moment. Please try it out, and read through the vendor/assets directory to see what all is included. If you use the library and like it, let me know. If you have problems, post an issue here. Better yet, fork, fix, and send me a pull request.

The library is open-source under the MIT license. I hope you like it!