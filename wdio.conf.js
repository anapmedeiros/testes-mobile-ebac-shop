const {join} = require('path')

exports.config = {
    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.spec.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "11.0",
        "deviceName": "Pixel API 30",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), './app/android/wcandroid-8.7.apk'),
        "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity'
        }],
        waitForTimeout: 10000000,
        mochaOpts: {
            timeout: 10000000
        }
}