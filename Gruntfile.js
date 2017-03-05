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
				files: [
                    'sass/*.scss',
                    'sass/*/*.scss'
                ],
				tasks: [
                    'scsslint',
                    'sass',
                    'combine_mq',
                    'cssmin',
                    'copy',
                    'cachebreaker'
                ],
                options: {
                    livereload: true
                }
			},
            scripts: {
                files: [
                    'js/*.js',
                    'js/*/*.js',
                    'js/data/*.json'
                ],
                tasks: [
                    'jsonlint',
                    'jsonmin',
                    'uglify',
                    'cachebreaker'
                ],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            images: {
                files: [
                    'img/*.png',
                    'img/*.jpg',
                    'img/*.jpeg',
                    'img/*.gif',
                    'img/*.svg'
                ],
                tasks: [
                    'imagemin',
                    'cachebreaker'
                ],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            html: {
                files: [
                    '*.html'
                ],
                tasks: [
                    'htmlmin',
                    'cachebreaker'
                ],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
		},

        scsslint: {
            allFiles: [
                'sass/*.scss',
                'sass/*/*.scss'
            ],
            options: {
                bundleExec: false,
                config: '.scss-lint.yml',
                reporterOutput: 'reports/scss-lint-report.xml',
                colorizeOutput: true,
                compact: false,
                exclude: [
                    'sass/bourbon/*.scss',
                    'sass/bourbon/*/*.scss',
                    'sass/neat/*.scss',
                    'sass/neat/*/*.scss'
                ]
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

        copy: {
            main: {
                files: [
                    {expand: true, flatten: true, src: ['sass/fonts'], dest: 'dist/css/'},
                    {expand: true, flatten: true, src: ['sass/fonts/**'], dest: 'dist/css/fonts/', filter: 'isFile'},
                ],
            },
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
                    'dist/js/vendor.min.js': [
                        'node_modules/angular/angular.js',
                        'node_modules/angular-scroll/angular-scroll.js',
                        'node_modules/angular-sanitize/angular-sanitize.js',
                        'node_modules/es5-shim/es5-shim.js',
                        'node_modules/es5-shim/es5-sham.js',
                        'node_modules/json3/lib/json3.js'
                    ],
                    'dist/js/portfolioApp.min.js': [
                        'js/services/*.js',
                        'js/directives/*.js',
                        'js/controllers/*.js',
                        'js/portfolioApp.js'
                    ]
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
                    src: ['**/*.{png,jpg,jpeg,gif}', '!_NotUsed', '!_Original'],
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

        cachebreaker: {
            dev: {
                options: {
                    match: [
                        'vendor.min.js',
                        'portfolioApp.min.js',
                        'site.common.min.css'
                    ]
                },
                files: {
                    src: [
                        'index.html',
                        '404.html',
                        '500.html'
                    ]
                }
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
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-jsonlint');
    grunt.loadNpmTasks('grunt-jsonmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-combine-mq');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-cache-breaker');

    grunt.registerTask('serve', function () {
        grunt.task.run(['connect', 'watch']);
    });

    grunt.registerTask('default', ['connect', 'watch']);
};
