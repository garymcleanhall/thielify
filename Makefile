
bin-dir = ./node_modules/.bin/
tests = ./tests/**/*_spec.js

test:
	$(bin-dir)jasmine $(tests)

