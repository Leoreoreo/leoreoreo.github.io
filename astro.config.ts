import AstroPureIntegration from 'astro-pure'
import { defineConfig } from 'astro/config'

import config from './src/site.config.ts'

export default defineConfig({
  site: 'https://leoreoreo.github.io',
  trailingSlash: 'never',
  output: 'static',
  image: { responsiveStyles: true },
  integrations: [AstroPureIntegration(config)]
})
