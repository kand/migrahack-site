const $ = require('jquery');

const infobox = require('./infobox/infobox');
const slider = require('./slider/slider');

infobox.build('.infobox');
slider.build('#sliderMenu', '#sliderSlides section');
