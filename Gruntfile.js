module.exports = function(grunt) {
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
        
        watch: {
            gruntfile: {
                files: ['Gruntfile.js']
            },
            css: {
				files: 'sass/*.scss',
				tasks: ['sass', 'cssmin']
			},
            scripts: {
                files: ['js/*.js', 'js/data/*.json'],
                tasks: ['jshint', 'uglify', 'jsonlint', 'jsonmin'],
                options: {
                    spawn: false,
                }   
            }
		},
		sass: {
			dist: {
				files: {
                    'css/style.css'     : 'sass/style.scss',
                    'css/ie.css'        : 'sass/ie.scss'
				}
			}
		},
        cssmin: {
            dist: {
                src: ['css/normalize.css', 'css/style.css'],
                dest: 'dist/css/site.common.min.css'
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'js/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dist/js/app.min.js': ['js/app.js'],
                }
            }
        },
        jsonlint: {
            sample: {
                src: [ 'js/data/portfolio.json' ]
            }
        },
        jsonmin: {
            dev: {
                options: {
                    stripWhitespace: true || false,
                    stripComments: true || false
                },
                files: {
                    'dist/js/data/portfolio.json' : 'js/data/portfolio.json'
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['*/*.{png,jpg,gif}'],
                    dest: 'dist/img'
                }]
            }
        }
	});
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jsonmin');
    grunt.loadNpmTasks('grunt-jsonlint');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['watch', 'sass', 'cssmin', 'jshint', 'uglify', 'jsonlint', 'jsonmin', 'imagemin']);
};