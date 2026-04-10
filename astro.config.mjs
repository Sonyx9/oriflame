// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

/**
 * Lokální `npm run build` / preview: níže.
 * Na GitHub Actions workflow předává `astro build --site` a `--base` z actions/configure-pages
 * (vlastní doména → base `/`, project Pages → `/oriflame/` včetně koncového lomítka).
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
