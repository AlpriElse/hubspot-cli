// Sandbox-only: the public repo ships without its vitest config.
import { defineConfig } from 'vitest/config';
export default defineConfig({
  test: {
    globals: true,
    clearMocks: true,
    setupFiles: ['./vitest.setup.ts'],
    include: ['**/__tests__/**/*.test.ts'],
    exclude: ['node_modules/**', 'acceptance-tests/**'],
  },
});
