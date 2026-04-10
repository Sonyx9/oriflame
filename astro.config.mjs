// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

/**
 * Kanonická adresa: oriflame.freedomfashion.cz (kořen `/`). Stejné hodnoty používá CI (`npm run build`).
 * Adresa github.io/REPO by vyžadovala base `/REPO/` — s vlastní doménou to v jednom buildu nekombinujte.
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
