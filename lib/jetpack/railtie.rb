require 'jetpack/helper'

module Jetpack
  class JetpackRailtie < Rails::Railtie
		ActiveSupport.on_load(:action_view) do
		include Jetpack::Helper
		end
  end
end