const $ = require('jquery');

let setupSlider = (menu) => {
  let $menu = $(menu);

  return $menu;
};

let addSlide = ($menu, item) => {
  let $item = $(item);
  let title = $item.data('title');

  $menu.append(`<li><i class="slider-circle fa fa-circle"></i><span>${title}</span></li>`);
};

module.exports = {
  build (menuSelector, itemsSelector) {
    let $menu = setupSlider(menuSelector);

    $(itemsSelector).each(function () {
      addSlide($menu, this);
    });
  }
};
