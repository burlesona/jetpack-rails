require 'jetpack/version'

module Jetpack
	module Helper
		# Creates a view name for CSS namespacing.
		def view_name
			[controller.controller_name,controller.action_name,params[:id]].compact.join(' ')
		end

		# Checks whether the user is looking at a particular view.
		# Helpful for cases like a unique home page design element: - if viewing? 'home'
		def viewing?(string)
			view_name.include?(string)
		end

		# Creates a nav link, ie. one that links to nothing ("#") if it is the current page
		# and in that case the link has the class "current"
		def nav_link_to(text, path)
			link_to_unless_current text, path do
				link_to text, '#', :class => 'current'
			end
		end

		# Outputs a standard flash message.
		def flash_messages
			str = ""
			flash.each do |type, msg|
				type == :alert ? persist = true : persist = false
				str += content_tag :div, msg, :class => ['flash-message', type], :data => { :persist => persist }
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
