const $ = require('jquery');

const CLASS_ACTIVE = 'active';

let setupSlider = ($menu) => {
  $menu.data('slides', []);

  return $menu;
};

let createSlideButtonHandlerClick = ($menu, $slide) => {
  return () => {
    $menu.data('slides').forEach(($otherSlide) => $otherSlide.removeClass(CLASS_ACTIVE));
    $slide.addClass(CLASS_ACTIVE);
  };
};

let addSlide = ($menu, $slide) => {
  let title = $slide.data('title');

  let $slideButton = $(`
    <li>
      <i class="slider-circle fa fa-circle"></i>
      <span>${title}</span>
    </li>
  `);
  $slideButton.on('click', createSlideButtonHandlerClick($menu, $slide));

  $menu.append($slideButton);

  $menu.data('slides').push($slide);
};

module.exports = {
  build (menuSelector, slidesSelector) {
    let $menu = setupSlider($(menuSelector));

    $(slidesSelector).each(function () {
      addSlide($menu, $(this));
    });

    $menu.data('slides')[0].addClass(CLASS_ACTIVE);
  }
};
