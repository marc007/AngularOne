exports.config = {
     allScriptsTimeout: 11000,
    specs: [
        'e2e/*.js'
    ],
    capabilities: {
        'browserName': 'PhantomJS'
    },
    baseUrl: 'http://localhost:8000/app/',
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    frameworks: 'jasmine',
    //chromeOnly: true,
    //chromeDriver: 'node_modules/protractor/selenium/chromedriver',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
