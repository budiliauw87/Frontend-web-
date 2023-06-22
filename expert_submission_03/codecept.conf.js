const {setHeadlessWhen, setCommonPlugins} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'e2e/**/*.spec.js',
  output: 'e2e/outputs',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:9000',
      show: true,
      windowSize: '1200x900',
      chrome: {
        args: ['--no-sandbox', '--window-size=1200,900'],
        defaultViewport: null,
      },
    },
  },
  include: {
    I: './steps_file.js',
  },
  name: 'expert_submission_03',
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
