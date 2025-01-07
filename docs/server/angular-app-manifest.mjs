
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Brussels-Permis/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 950, hash: '745597613159d559a45953df66642f15cbe60c9f3e4ea7a27f539258665b3bf8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1040, hash: '53a10268b24f72bed5dd8f5d06dd54ed858c84989dace156d42e353be87681f6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-BSYZCWE2.css': {size: 298, hash: 'Ax0Nwpi+OM0', text: () => import('./assets-chunks/styles-BSYZCWE2_css.mjs').then(m => m.default)}
  },
};
