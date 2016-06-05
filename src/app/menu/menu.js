const $ = require('jquery');

let setupMenu = (menu) => {
  let $menu = $(menu);

  return $menu;
};

let addMenuItem = ($menu, item) => {
  let $item = $(item);
  let title = $item.data('title');

  $menu.append(`<li><i class="menu-circle fa fa-circle"></i><span>${title}</span></li>`);
};

module.exports = {
  build (menuSelector, itemsSelector) {
    let $menu = setupMenu(menuSelector);

    $(itemsSelector).each(function () {
      addMenuItem($menu, this);
    });
  }
};
