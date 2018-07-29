'use strict';

var app = {};

app.slider = function () {
  var windowWidth = $(window).innerWidth();

  if (windowWidth < 675) {
    $('.slider').bxSlider({
      pager: true,
      auto: true,
      pause: 5000,
      controls: false
    });
  } else {
    $('.slider').bxSlider({
      pager: false,
      auto: true,
      pause: 5000,
      controls: false
    });
  }
};

app.init = function () {
  app.slider();
};

$(function () {
  app.init();
});