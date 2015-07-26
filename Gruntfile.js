module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Express
		express: {
			options: {
				port: 8000
			}
			dev: {
				options: {
					script: 'server/index.js',
					node_env: 'dev'
				}
			},
			prod: {
				options: {
					script: 'server/index.js',
					node_env: 'production'
				}
			}
		},

		// Watch
		watch: {
			express: {
				files: [],
				tasks: ['express:dev'],
				options: {
					spawn: false
				}
			}
		},

		// Sass
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'www/css/main.css': 'styles/main.scss'
				}
			}
		}

	});

	// Load Task Dependencies
	grunt.loadNpmTasks('grunt-express-sever');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	// Define Tasks
	grunt.regesterTastk('default', ['express:dev', 'watch']);
};