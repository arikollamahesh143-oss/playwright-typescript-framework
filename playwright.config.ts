import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './test',

  use: {
    headless: false,
    browserName: 'chromium',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  },

  reporter: [
    ['html'],
    ['list']
  ]
});