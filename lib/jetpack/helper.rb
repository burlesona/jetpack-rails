require 'jetpack/version'

module Jetpack
	module Helper
		
		def view_name
			string = String.new

			case
			when controller.action_name =~ /new|edit/
				string += controller.action_name + "_"
			when controller.action_name =~ /index|create/
				string += controller.controller_name
			else
				string += controller.controller_name.singularize
			end
			
			string += "_view"
		end
	end

end