module.exports = function(config) {
    config.set({
         // base path, that will be used to resolve files and exclude
        basePath: '',

        // list of files / patterns to load in the browser
        files: [
            'js/thirdparty/jquery-2.1.4.min.js',
            'js/thirdparty/angularjs-1.4.7.js',
            'js/thirdparty/angularjs-mocks.js',
            'test/spec/**/*.js',
            'js/portfolioApp.js',
            'js/**/*.js'
        ],

        // list of files to exclude
        exclude: [],

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        frameworks: ['jasmine'],

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],

        // progress is the default reporter
        reporters: ['progress', 'coverage', 'html', 'dots', 'junit'],

        coverageReporter: {
            type: 'html',
            dir: 'reports/coverage'
        },

        htmlReporter: {
            outputDir: 'reports/jasmine'
        },

        preprocessors: {
            'js/**/*.js': ['coverage']
        },

        // web server port
        port: 9001,

        // add plugin settings
        junitReporter: {
            // location of results output file
            outputFile: 'reports/results-jasmine.xml'
        },

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // list of karma plugins
        plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-ie-launcher',
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-coverage',
            'karma-jshint-preprocessor'
        ]
    });
};
