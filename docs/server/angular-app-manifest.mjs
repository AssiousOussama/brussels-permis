
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/brussels-permis/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 950, hash: 'be204703a20eea12716ab51107da1b26e4c719d0292a94ddb79ae1fd0c8eba75', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1040, hash: '378c5af195cc2012b2fef0275859131d360f74f7030dec04f5fa463068ffc563', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-BSYZCWE2.css': {size: 298, hash: 'Ax0Nwpi+OM0', text: () => import('./assets-chunks/styles-BSYZCWE2_css.mjs').then(m => m.default)}
  },
};
