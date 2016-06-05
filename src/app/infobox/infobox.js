let $ = require('jquery');

module.exports = {
  build (infoboxSelector) {
    $(infoboxSelector).on('mousewheel DOMMouseScroll', function (e) {
      var delta = -e.originalEvent.wheelDelta || e.originalEvent.detail;
      var scrollTop = this.scrollTop;
      if((delta < 0 && scrollTop === 0) || (delta > 0 && this.scrollHeight - this.clientHeight - scrollTop === 0)) {
        e.preventDefault();
      }
    });
  }
};
