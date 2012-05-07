require 'jetpack/version'

module Jetpack
	module Helper
		
		def view_name
			[controller.controller_name,controller.action_name,params[:id]].compact.join(' ')
		end
	end

end