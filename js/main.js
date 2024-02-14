// wow.js
new WOW().init();

// smoot scroll
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true,
});

// scroll to up
document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    var stickerButton = document.querySelector('.sticker-button');

    if (window.scrollY > 100) {
      stickerButton.classList.add('activate');
    } else {
      stickerButton.classList.remove('activate');
    }
  });
});
