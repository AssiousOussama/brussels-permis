
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 1001, hash: 'e26e9ca9415b74c861d26672c5cc52f20967e77c7b67c8afaf8d41fbaa74a2c7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: 'a6b492c6a948c0a95c83fcad41ee211c8eaa836225733aaf571c21eff0a6d91f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LG54IIZR.css': {size: 366, hash: 'SjJZNUmNSUY', text: () => import('./assets-chunks/styles-LG54IIZR_css.mjs').then(m => m.default)}
  },
};
