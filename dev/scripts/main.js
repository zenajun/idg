const app = {};

app.slider = () => {
  $('.slider').bxSlider({
    pager: true,
    auto: true,
    pause: 5000,
    controls: false
  });
}




app.init = () => {
  app.slider();
}


$(function() {
  app.init();
});