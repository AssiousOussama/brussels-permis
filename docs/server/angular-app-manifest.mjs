
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/brussels-permis/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 950, hash: '30a64be38b7357b2aa78fabb49fc74bc870011f462cecd1d0fe46a245cc782be', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1040, hash: '60c1038327ed281acce19416137150316ff959eb47276ab741133866c31685a0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-BSYZCWE2.css': {size: 298, hash: 'Ax0Nwpi+OM0', text: () => import('./assets-chunks/styles-BSYZCWE2_css.mjs').then(m => m.default)}
  },
};
