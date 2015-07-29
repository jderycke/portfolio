module.exports = function (grunt) {
    'use strict';
    
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 9000,
                    base: 'dist',
                    open: true,
                    livereload: 9000
                }
            }
        },
        
        watch: {
            options: {
                dateFormat: function (time) {
                    grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
                    grunt.log.writeln('Waiting for more changes...');
                }
            },
            gruntfile: {
                files: ['Gruntfile.js'],
                options: {
                    livereload: true
                }
            },
            css: {
				files: 'sass/*.scss',
				tasks: ['sass', 'combine_mq', 'cssmin'],
                options: {
                    livereload: true
                }
			},
            scripts: {
                files: ['js/*.js', 'js/data/*.json'],
                tasks: ['jsonlint', 'jsonmin', 'uglify'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            images: {
                files: ['img/*.png', 'img/*.jpg', 'img/*.jpeg', 'img/*.gif', 'img/*.svg'],
                tasks: ['imagemin'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            html: {
                files: ['*.html'],
                tasks: ['htmlmin'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
		},
        
		sass: {
			dist: {
				files: {
                    'css/style.css' : 'sass/style.scss'
				}
			}
		},
        
        combine_mq: {
            default_options: {
                expand: true,
                cwd: 'css',
                src: 'style.css',
                dest: 'temp'
            }
        },
        
        cssmin: {
            dist: {
                src: ['css/normalize.css', 'temp/style.css'],
                dest: 'dist/css/site.common.min.css'
            }
        },
                
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish'),
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            },
            all: [
                'Gruntfile.js',
                'js/*.js'
            ]
        },
        
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dist/js/app.min.js': ['js/app.js'],
                    'dist/js/site.min.js': ['js/site.js'],
                    'dist/js/thirdparty/jquery-2.1.4.min.js': ['js/thirdparty/jquery-2.1.4.js'],
                    'dist/js/thirdparty/angular-1.4.3.min.js': ['js/thirdparty/angular-1.4.3.js']
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
                    stripWhitespace: true,
                    stripComments: true
                },
                files: {
                    'dist/js/data/portfolio.json' : 'js/data/portfolio.json'
                }
            }
        },
        
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'img',
                    src: '**/*.{png,jpg,jpeg,gif}',
                    dest: 'dist/img/'
                }]
            }
        },
        
        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '',
                    src: '*.html',
                    dest: 'dist/'
                }]
            }
        },
        
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },
        
        coverage: {
            unit: {
                options: {
                    thresholds: {
                        statements: 46.5,
                        branches: 34.5,
                        lines: 46.5,
                        functions: 52.5
                    },
                    dir: 'coverage',
                    root: 'reports'
                }
            }
        }
	});
    
    grunt.loadNpmTasks('grunt-dev-update');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jsonlint');
    grunt.loadNpmTasks('grunt-jsonmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-combine-mq');
    grunt.loadNpmTasks('grunt-karma');
    
    grunt.registerTask('serve', function () {
        grunt.task.run(['connect', 'watch']);
    });
    
    grunt.registerTask('default', ['connect', 'watch']);
};
