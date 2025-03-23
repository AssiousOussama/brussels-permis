
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/brussels-permis-app/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 1022, hash: '2ddcf436750b11e8c16e02d33bedfb22dc8884eac2c20f5b7d13aa668f34208a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1044, hash: '1eddc0d183708088f89c41f8ffdf748e3aab622a6a150b165498284577ce6245', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LG54IIZR.css': {size: 366, hash: 'SjJZNUmNSUY', text: () => import('./assets-chunks/styles-LG54IIZR_css.mjs').then(m => m.default)}
  },
};
