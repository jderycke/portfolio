module.exports = function(config) {
    config.set({
 
        // base path, that will be used to resolve files and exclude
        basePath: '',
 
        // frameworks to use
        frameworks: ['jasmine'],
 
        // list of files / patterns to load in the browser
        files: [
            '*.js'
        ],
 
        // list of files to exclude
        exclude: [],
 
        preprocessors: {
            '*.js': 'coverage'
        },

        reporters: ['progress', 'coverage', 'html', 'dots', 'junit'],

        coverageReporter: {
            type: 'html',
            dir: 'reports/coverage'
        },

        htmlReporter: {
            outputDir: 'reports/jasmine'
        },

        junitReporter: {
            outputFile: 'target/surefire-reports/TEST-jasmineResults.xml'
        },

        // web server port
        port: 8085,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};