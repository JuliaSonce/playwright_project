// @ts-check

// const { defineConfig, devices } = require('@playwright/test');
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';


dotenv.config({
  path: `./.env.${process.env.ENV}`,
});


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
    baseURL: 'https://qauto2.forstudy.space/',
    httpCredentials: {
      username: "guest",
      password: "welcome2qauto",
    },
    screenshot: 'only-on-failure',
    video: 'off',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
  globalSetup: './globalSetup',
  globalTeardown: './globalTeardown',
  timeout: 10000,

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'prod1',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: process.env.BASE_URL,
        httpCredentials: {
          username: "guest",
          password: "welcome2qauto",
        },
      },
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

