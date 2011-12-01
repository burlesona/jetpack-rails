Gem::Specification.new do |s|
  s.name = "jetpack-rails"
  s.version = '0.2.2'
  s.authors = ["Andrew Burleson"]
  s.email = 'andrew@eighty-b.com'
  s.summary = "A sweet fractional grid system plus an awesome bootstrap mashup, optimized for the asset pipeline."
  s.homepage = "http://github.com/burlesona/jetpack-rails"

  s.add_dependency 'sass-rails', '~> 3.1.0'

  s.files = Dir["vendor/**/*.css.scss"] + Dir["vendor/**/*.js"] + ["CHANGELOG", "README.md", "LICENSE", "lib/jetpack-rails.rb"]
end