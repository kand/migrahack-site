'use strict';

let fonts = require.context('font-awesome/fonts', true, /.*\.(eot|svg|tff|woff2?)$/);
fonts.keys().map(fonts);

require('font-awesome/scss/font-awesome.scss');

require('./app/main.scss');

require('./app/client.js');
