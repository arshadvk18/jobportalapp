
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://arshadvk18.github.io/jobportalapp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://arshadvk18.github.io/jobportalapp"
  }
],
  assets: {
    'index.csr.html': {size: 23620, hash: 'd3ed525dd8ab53fa77acbaa62603970748ad04a1fca7bf65a58c207122ae221f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17194, hash: '60fa8db697c379e24b29dd977c78b203c114bcd21fd0c537569eaa884594066f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 23945, hash: '5568c4911ea54921338cfd1f4ad164eaa93860b6ebf1eefcfe2d3819ee1aff1a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
