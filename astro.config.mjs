// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://oriflame.freedomfashion.cz',
  base: '/',
  output: 'static',
  /** GitHub Pages + Jekyll ignorují složky začínající na „_“ — nepoužívat výchozí _astro */
  build: {
    assets: 'assets',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
