import type { Config, IntegrationUserConfig, ThemeUserConfig } from 'astro-pure/types'

export const theme: ThemeUserConfig = {
  title: 'Leyang Li',
  author: 'Leyang Li',
  description:
    'Leyang Li — researcher in human-computer interaction, usable privacy and security, and human-centered AI.',
  favicon: '/favicon/favicon.ico',
  locale: { lang: 'en-US', attrs: 'en_US', dateLocale: 'en-US' },
  logo: { src: 'src/assets/avatar.png', alt: 'Leyang Li' },
  titleDelimiter: '·',
  prerender: true,
  npmCDN: 'https://cdn.jsdelivr.net/npm',
  head: [],
  customCss: [],
  header: {
    menu: [
      { title: 'Projects', link: '/projects' },
      { title: 'About', link: '/about' },
      { title: 'CV', link: '/Leyang_CV.pdf' }
    ]
  },
  footer: { year: `© ${new Date().getFullYear()}`, credits: false },
  content: { externalLinks: { content: ' ↗' }, share: [] }
}

export const integ: IntegrationUserConfig = {
  pagefind: false,
  // Required by Astro Pure; no quote component is rendered.
  quote: { server: '', target: '(data) => data' },
  typography: { class: 'prose text-base', blockquoteStyle: 'normal', inlineCodeBlockStyle: 'code' },
  mediumZoom: { enable: false },
  waline: { enable: false }
}

export default { ...theme, integ } as Config
