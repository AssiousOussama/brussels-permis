
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 1002, hash: '481ff4881b206d92632140f2172024326c1d4646fbd824428fe7617045339b29', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: 'c8e84c3f08700498c48c69a6e63bda52b41187d9790acd8a2640a2f4bb01edaa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LG54IIZR.css': {size: 366, hash: 'SjJZNUmNSUY', text: () => import('./assets-chunks/styles-LG54IIZR_css.mjs').then(m => m.default)}
  },
};
