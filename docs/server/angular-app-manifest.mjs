
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 1001, hash: '036e96e296d74cb315994dd2b4d5a7e0d3a6053159d115b0b86c830b5224abcf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: '21b0a0bb3c31612b0ed251e51d826860fb31a8a2943733c9335b519636cb761b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LG54IIZR.css': {size: 366, hash: 'SjJZNUmNSUY', text: () => import('./assets-chunks/styles-LG54IIZR_css.mjs').then(m => m.default)}
  },
};
