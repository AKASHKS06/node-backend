// script.js

// Ensure the DOM is ready before executing JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Owl Carousel for the first owl-carousel section
    /*$('.owl-carousel:first').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });*/
  
    // Initialize Owl Carousel for the second owl-carousel section
    $('.owl-carousel:last').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  
    // Initialize AOS (Animate On Scroll) library
    AOS.init();
  });
  AOS.init();

  
  