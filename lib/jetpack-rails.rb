require 'sass-rails'
require 'jetpack/railtie' if defined?(Rails)

module Jetpack
	module Rails
		class Engine < ::Rails::Engine
			# Make Rails aware of Jetpack's Vendor Assets
		end
	end
end