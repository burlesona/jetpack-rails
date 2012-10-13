require 'jetpack/version'

module Jetpack
	module Helper
		# Creates a view name for CSS namespacing.
		def view_name
			[controller.controller_name,controller.action_name,params[:id]].compact.join(' ')
		end

		# Outputs a standard flash message.
		def flash_messages
			str = ""
			flash.each do |type, msg|
				type == :alert ? persist = true : persist = false
				str += content_tag :div, msg, :class => ['alert_message', type], :data => { :persist => persist }
			end
			str.html_safe
		end

		# Creates a smart title helper, appending [DEV] when you're in dev mode.
		def title(page_title)
			mode = "[DEV] " unless ::Rails.env.production?
			content_for(:title) { mode.to_s + page_title + " | " }
		end
	end
end