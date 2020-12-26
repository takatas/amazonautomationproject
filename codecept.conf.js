const {setHeadlessWhen} = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
    tests: './test/*_test.js',
    output: './output',
    helpers: {
        WebDriver: {
            url: '/',
            browser: 'chrome',
            desiredCapabilities: {
                chromeOptions: {
                    prefs:
                        {
                            profile: {
                                default_content_settings: {
                                    popups: "0",
                                }
                            }
                        }
                },
            },
            windowSize: 'maximize',
            smartWait: 50000,
            restart: false,
            waitForTimeout: 50000,
            keepBrowserState: true,
            keepCookies: true,
            timeouts: {
                script: 60000,
                pageload: 10000
            }
        },
        Existing: {
            require: './existing_helper.js',
        },

    },
    include: {
        I: './steps_file.js',

        anaSayfaPage: './pages/anaSayfa.js',
        mainToolBarFragment: './fragments/mainToolBar.js',
        urunIslemleriFragment: './fragments/urunIslemleri.js',


    },
    bootstrap: null,
    mocha: {},
    name: 'tarnetTestProject',
    plugins: {
        retryFailedStep: {
            enabled: true
        },
        screenshotOnFail: {
            enabled: true
        },
        allure: {}
    },
    environment: 'parameters'
}