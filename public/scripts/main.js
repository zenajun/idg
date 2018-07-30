'use strict';

var app = {};

app.slider = function () {
  $('.slider').bxSlider({
    pager: true,
    auto: true,
    pause: 5000,
    controls: false
  });
};

app.init = function () {
  app.slider();
};

$(function () {
  app.init();
});