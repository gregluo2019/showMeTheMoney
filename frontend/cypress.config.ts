import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(on, config) {},
    projectId: 'show-me-the-money',
    viewportWidth: 1920,
    viewportHeight: 1440,
  },
});
