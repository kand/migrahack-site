

let context = require.context('font-awesome/fonts', true, /.*\.(eot|svg|tff|woff2?)$/);
context.keys().map(context);

require('font-awesome/scss/font-awesome.scss')

require('./app/main.scss');
require('./app/client.js');
