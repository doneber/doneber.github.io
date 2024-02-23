import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://doneber.dev',
  i18n: {
    defaultLocale: 'es',
    locales: [ 'es', 'en' ],
    routing: {
      prefixDefaultLocale: false
    },
    fallback: {
      en: 'es'
    }
  }
});
