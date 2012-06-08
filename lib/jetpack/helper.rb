require 'jetpack/version'

module Jetpack
	module Helper
		def view_name
			[controller.controller_name,controller.action_name,params[:id]].compact.join(' ')
		end

		def flash_messages
			str = ""
			flash.each do |type, msg|
				type == :alert ? persist = true : persist = false
				str += content_tag :div, msg, :class => ['alert_message', type], :data => { :persist => persist }
			end
			str.html_safe
		end
	end

end