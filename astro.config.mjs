// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

/**
 * Vlastní doména (oriflame.freedomfashion.cz): site = doména, base = '/'.
 * Project Pages na adrese https://USER.github.io/REPO/ vyžaduje base '/REPO/' — to s vlastní doménou nelze mít v jednom buildu;
 * pro ostrý web nechte base '/'.
 */
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
