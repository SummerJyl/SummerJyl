// Navigation
document.querySelector('.toggleMenu').addEventListener('click', () => {
    document.querySelector(".toggleMenu, .navigation").forEach(elem => elem.classList.toggle('active'));
});
// End Navigation

// Menu / Blend Slider
var swiper = new Swiper(".blend-slider", {
    spaceBetween: 100,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 150,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2.5,
        },
        1024: {
            slidesPerView: 3,
          },

        1220: {
          slidesPerView: 4,
        },
      },
    });
// End Menu / Blend Slider

// Testimonial
var swiper = new Swiper(".testimonial-slider", {
  loop: true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  navigation: {
      nextE1: ".swiper-button-next",
      nextE1: ".swiper-button-prev",
  },
});
//End Testimonial