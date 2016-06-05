'use strict';

const $ = require('jquery');

let addMenuItem = (item) => {
  let $item = $(item);
  let title = $item.data('title');

  console.log(title);
};

module.exports = {
  build (selector) {
    $(selector).each(function () {
      addMenuItem(this);
    });
  }
};
