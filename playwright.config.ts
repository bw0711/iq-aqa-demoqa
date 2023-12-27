import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv'
dotenv.config();

export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.tests.ts',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : 1,
  reporter: 'line',
  use: {
    baseURL: process.env.BASE_URL,
    trace: {
      mode: 'retain-on-failure',
    },
    viewport: { width: 1920, height: 1080 },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
