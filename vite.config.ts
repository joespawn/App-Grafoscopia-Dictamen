import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  const isGitHubPages = process.env.GITHUB_PAGES === 'true';

  return ({
    base: isGitHubPages ? '/App-Grafoscopia-Dictamen/' : './', // CRITICO: Esto permite que la app funcione en cualquier carpeta
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1600,
  }
  });
});
