// @ts-check

// const { defineConfig, devices } = require('@playwright/test');
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
const envFile = `./env/.env.${process.env.ENV || 'prod'}`;
const envConfig = dotenv.config({ path: envFile });
dotenvExpand.expand(envConfig);

console.log("\n\n==================================================================")
console.log(`Running tests with env: ${process.env.ENV} from file: ${envFile}`)
console.log(`Current  base URL: ${process.env.BASE_URL}`)
console.log("==================================================================\n\n")

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: 'tests',
  /* Run tests in files in parallel */
  testMatch: ['tests/**/*.spec.js'],
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  //Mark the tests that you like to run
  // grep: /@smoke/,
  // grepInvert: /@smoke/,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', { open: 'never' }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.BASE_URL,
    httpCredentials: {
      // @ts-ignore
      username: process.env.USER_NAME,
      // @ts-ignore
      password: process.env.PASSWORD,
    },
    screenshot: 'only-on-failure',
    video: 'off',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  authSetup: './auth.setup',
  globalSetup: './globalSetup',
  globalTeardown: './globalTeardown',
  timeout: 10000,

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'setup',
      testMatch: /.*\auth.setup\.ts/
    },

    {
      name: 'Chrome',
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    }

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

