module.exports = function (grunt) {
    'use strict';

    var environmentConfig = {
        FRONTEND_CONNECT_PORT: process.env.FRONTEND_CONNECT_PORT || 9000,
        FRONTEND_CONNECT_LIVERELOAD_PORT: process.env.FRONTEND_CONNECT_LIVERELOAD_PORT || 9999,
        FRONTEND_CONNECT_TEST_PORT: grunt.option('frontend_connect_test_port') || process.env.FRONTEND_CONNECT_TEST_PORT || 7001,
    }

    grunt.log.subhead('Environment configuration');
    Object.keys(environmentConfig).forEach(function (settingName) {
        grunt.log.writeln(grunt.log.table([40, 10], [settingName, '' + environmentConfig[settingName]]));
    });

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: environmentConfig.FRONTEND_CONNECT_PORT,
                    base: 'dist',
                    open: true,
                    livereload: environmentConfig.FRONTEND_CONNECT_LIVERELOAD_PORT
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
				files: ['sass/*.scss', 'sass/*/*.scss'],
				tasks: ['scsslint', 'sass', 'combine_mq', 'cssmin'],
                options: {
                    livereload: true
                }
			},
            scripts: {
                files: ['js/*.js', 'js/*/*.js', 'js/data/*.json'],
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

        scsslint: {
            allFiles: [
                ['sass/*.scss', 'sass/pages/*.scss'],
            ],
            options: {
                bundleExec: false,
                config: '.scss-lint.yml',
                compact: true,
                colorizeOutput: true,
                reporterOutput: 'reports/scss-lint-report.xml',
                maxBuffer: 8000*1024
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
                dest: '.temp/css'
            }
        },

        cssmin: {
            dist: {
                src: ['node_modules/normalize.css/normalize.css', '.temp/css/style.css'],
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
                mangle: true
            },
            my_target: {
                files: {
                    'dist/js/portfolioApp.min.js': ['js/portfolioApp.js', 'js/services/*.js', 'js/directives/*.js', 'js/controllers/*.js']
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
                    'dist/js/data/portfolio.min.json' : 'js/data/portfolio.json'
                }
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'img',
                    src: ['**/*.{png,jpg,jpeg,gif}', '!_Original', '!_NotUsed'],
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
                configFile: 'karma-conf.js',
                singleRun: true,
                coverageReporter: {
                    reporters: [
                        {type: 'html', dir: 'reports/coverage'},
                        {type: 'cobertura', dir: 'reports/target/site/cobertura/', file: 'coverage.xml'},
                        {type: 'lcovonly', dir: 'reports/coverage', subdir: '.', file: 'lcov.dat'},
                        {type: 'json', dir: 'reports/coverage'}
                    ]
                }
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
        },

        livereload: {
            options: {
                open: 'http://' + require('os').hostname() + ':' + environmentConfig.FRONTEND_CONNECT_PORT,
                base: [
                    '.tmp'
                ]
            }
        }
	});

    grunt.loadNpmTasks('grunt-dev-update');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-scss-lint');
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
