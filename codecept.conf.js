exports.config = {
  output: 'output',
  helpers: {
    REST: {
      url: 'https://jsonplaceholder.typicode.com/'
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: ['./features/users.feature'],
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    "allure": {
      "enabled": true
    },
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'api_qa_assessment'
};