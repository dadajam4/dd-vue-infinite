module.exports = {
  entry: 'src/lib/index.ts',
  babel: true,
  typescript: true,
  vue: true,
  sass: true,
  postcss: true,
  autoprefixer: true,
  external: ['vue', 'dd-scroller', 'dd-event', 'dd-visibility'],
  globals: {
    vue: 'Vue',
    'dd-scroller': 'DDScroller',
    'dd-event': 'DDEvent',
    'dd-visibility': 'DDVisibility',
  },
};
