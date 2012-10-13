# -*- encoding: utf-8 -*-
$:.push File.expand_path("../lib", __FILE__)
require "jetpack/version"

Gem::Specification.new do |s|
  s.name        = "jetpack-rails"
  s.version     = Jetpack::VERSION
  s.authors     = ["Andrew Burleson"]
  s.email       = ["andrew@eighty-b.com"]
  s.homepage    = "http://github.com/burlesona/jetpack-rails"
  s.summary     = %q{A sweet fractional grid system plus an awesome bootstrap mashup, optimized for the asset pipeline.}
  s.description = %q{A sweet boostrap mashup for Rails applications.
  The philosophy is pretty simple, it should make building Rails apps go a lot faster.
  The library prefers modularity over rigidity and mixins over defintions. Check out the github readme for more.}

  s.files         = `git ls-files`.split("\n")
  # s.test_files    = `git ls-files -- {test,spec,features}/*`.split("\n")
  # s.executables   = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  s.require_paths = ["lib"]

  # specify any dependencies here; for example:
  s.add_dependency 'sass-rails', '>= 3.1'
  # s.add_development_dependency "rspec"
  # s.add_runtime_dependency "rest-client"
end