const pkgName = 'ui-kit';

export default {
  lang: 'en',
  files: '**/*.mdx',
  ignore: ['./*.md'],
  title: pkgName,
  description: `${pkgName}.`,
  base: `/${pkgName}/`,
  menu: [
    'Introduction',
    'UI Components',
    { name: 'Components', menu: [] },
    { name: 'UI', menu: [] },
    {name: 'Shared', menu: [
      { name: 'Primary', menu: [
        'Sound Manager'
      ] },
    ] },
  ],
  menuDisplayName: {
    UI: 'User Interface',
    Main: 'Main Container',
  },
  groups: {
    '': [],
    API: ['Components', 'UI'],
  },
  themeConfig: {
    search: true,
    mainContainer: {
      fullscreen: false,
      align: 'center',
    },
    header: {
      icons: 'minimal',
      fixed: false,
    },
    footer: {
      navigation: true,
    },
    logo: {
      // src: '/public/assets/logo.svg' // use this line if you want one logo for both color modes
      src: {
        light: '/public-data/assets/cometchatlogo.svg',
        dark: '/public-data/assets/cometchatlogo.svg'
      },
      width: 45,
    },
    menu: {
      search: false,
      headings: {
        rightSide: true,
        scrollspy: true,
        depth: 3,
      },
    },
  },
  docgenConfig: {
    searchPatterns: [
      '../**/*.{ts,tsx,js,jsx,mjs}',
      '../theme/src/gatsby-theme-docz/custom-components/**/*.{ts,tsx,js,jsx,mjs}',
      '!**/node_modules',
      '!../**/node_modules',
      '!**/doczrc.js',
      '!../**/doczrc.js',
    ],
  },
  filterComponents: (files) =>
    files.filter((filepath) => /[w-]*.(js|jsx|ts|tsx)$/.test(filepath)),
};
