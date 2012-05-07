# -*- encoding: utf-8 -*-
$:.push File.expand_path('../lib', __FILE__)
require 'jetpack/version'

Gem::Specification.new do |s|
  s.name = 'jetpack-rails'
  s.version = Jetpack::VERSION
  s.authors = ["Andrew Burleson"]
  s.email = 'andrew@eighty-b.com'
  s.summary = "A sweet fractional grid system plus an awesome bootstrap mashup, optimized for the asset pipeline."
  s.homepage = "http://github.com/burlesona/jetpack-rails"
  s.add_dependency 'sass-rails', '>= 3.1'
  s.files = Dir["vendor/**/*.css.scss"] + Dir["vendor/**/*.js"] + ["CHANGELOG", "README.md", "LICENSE", "lib/jetpack-rails.rb"]
  
  s.description = "A sweet boostrap mashup for Rails applications.
  The philosophy is pretty simple, it should make building Rails apps go a lot faster.
  The library prefers modularity over rigidity and mixins over defintions. Check out the github readme for more."
end