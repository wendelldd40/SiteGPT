import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // GitHub Pages publica este repositório em /SiteGPT/; na Vercel o site fica na raiz.
  base: process.env.GITHUB_ACTIONS ? '/SiteGPT/' : '/',
  plugins: [react(), tailwindcss()]
});
