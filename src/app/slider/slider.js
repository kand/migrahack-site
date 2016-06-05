const $ = require('jquery');

const CLASS_ACTIVE = 'active';

let setupSlider = ($menu) => {
  $menu.data('buttons', []);
  $menu.data('slides', []);

  return $menu;
};

let createSlideButtonHandlerClick = ($menu, $slide, $button) => {
  return () => {
    $menu.data('buttons').forEach(($otherButton) => $otherButton.removeClass(CLASS_ACTIVE));
    $menu.data('slides').forEach(($otherSlide) => $otherSlide.removeClass(CLASS_ACTIVE));

    $button.addClass(CLASS_ACTIVE);
    $slide.addClass(CLASS_ACTIVE);
  };
};

let addSlide = ($menu, $slide) => {
  let title = $slide.data('title');

  let $slideButton = $(`
    <li>
      <button>${title}</button>
    </li>
  `);
  $slideButton
    .find('button')
    .on('click', createSlideButtonHandlerClick($menu, $slide, $slideButton));

  $menu.append($slideButton);

  $menu.data('buttons').push($slideButton);
  $menu.data('slides').push($slide);
};

module.exports = {
  build (menuSelector, slidesSelector) {
    let $menu = setupSlider($(menuSelector));

    $(slidesSelector).each(function () {
      addSlide($menu, $(this));
    });

    $menu.data('buttons')[0].addClass(CLASS_ACTIVE);
    $menu.data('slides')[0].addClass(CLASS_ACTIVE);
  }
};
