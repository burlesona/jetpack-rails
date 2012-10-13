require 'jetpack/version'

module Jetpack
	module Helper
		# Creates a view name for CSS namespacing.
		def view_name
			[controller.controller_name,controller.action_name,params[:id]].compact.join(' ')
		end

		# Creates a smart title helper, appending [DEV] when you're in dev mode.
		def title(page_title)
			APP_NAME = @app_name unless defined?(APP_NAME)
			mode = "[DEV] " unless Rails.env.production?
			if page_title
				content_for(:title) { mode.to_s + page_title + " | " + APP_NAME }
			else
				content_for(:title) { mode.to_s + APP_NAME }
			end
		end
	end
end