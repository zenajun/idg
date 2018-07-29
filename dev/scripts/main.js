const app = {};

app.slider = () => {
  const windowWidth = $(window).innerWidth();
  
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
}

app.init = () => {
  app.slider();
}


$(function() {
  app.init();
});