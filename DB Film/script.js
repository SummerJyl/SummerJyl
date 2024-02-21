// Movie Data
var titles = {
  0: {
    title: "susperia", 
    year: "1977",
    genre: "Horror",
    description: "An American newcomer to a prestigious German ballet academy comes to realize that the school is a front for something sinister amid a series of grisly murders.",
    videoURL: "got.mp4",
  },
  1: {
    title: "deep red",
    year: "1975",
    genre: " horror, mystery",
    description: "A jazz pianist and a wisecracking journalist are pulled into a complex web of mystery after the former witnesses the brutal murder of a psychic.",
    videoURL: "deepred.mp4",
  },
  2: {
    title: "inferno",
    year: "1980",
    genre: "horror",
    description: "An American college student in Rome and his sister in New York investigate a series of killings in both locations where their resident addresses are the domain of two covens of witches.",
    videoURL: "inferno.mp4",
    },
  3: {
    title: "tenebre",
    year: "1982",
    genre: "giallo-horror",
    description: "Visiting Rome on a promotional tour for his new novel, writer Peter Neal (Anthony Franciosa) is pulled into a murder mystery as someone familiar with his work begins a series of killings.",
    videoURL: "tenebre.mp4",
  },
  4: {
    title: "phenomena",
    year: "1985",
    genre: "giallo-horror",
    description: "An American (Jennifer Connelly) at a Swiss finishing school calls on insects to help a paralyzed scientist (Donald Pleasence) fight a monster.",
    videoURL: "phenomena.mp4",
    },
  };

// Swiper
// Create thumbs swiper
var thumbsSwiper = new Swiper(".thumbsSwiper", {
  spaceBetween: 10,
  slidesPerView: 5,
  breakpoints: {
    200:{
      slidesPerView: 1.5
    },
    400: {
      slidesPerView: 1.5
    },
    600: {
      slidesPerView: 3
    },
    1100: {
      slidesPerView: 5
    },
  },
  freeMode: true,
  watchSlidesProgress: true,
});

const swiper = new Swiper(".bannerSwiper", {
  spaceBetween: 0,
  effect: "fade",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //Make thumbs slider work as thumbs for the banner slider
  thumbs: {
    swiper: thumbsSwiper
  },
});
// Change titles
var changeTitle = (index)=>{
  var title = document.querySelector('#title');
  var subTitle = document.querySelector('#subTitle');
  var desc = document.querySelector('#desc');
  title.innerHTML = `<h1>${titles[index].title}</h1>`;
  subTitle.innerHTML = `<p>${titles[index].subTitle}</p>`;
  desc.innerHTML = `<p>${titles[index].desc}</p>`;
}
// activeIndexChange is a swiper event
swiper.on('activeIndexChange', function() {
  changeTitle(swiper.activeIndex); // activeIndex is a swiper param
})
// Show Overlay and change trailer video according to the active
var overlay = document.querySelector(".overlay");
var videoContainer = document.querySelector('#movie-trailer');
var showTrailer = ()=> {
  var index = swiper.activeIndex;
  videoContainer.innerHTML = `
  <video controls autoplay id = "video">
  <source scr="Images/${titles[index].videoURL}" type="video/mp4">
  </video>
  `
  overlay.classList.add("show");
};
// Close Overlay
var closeOverlay = () => {
  // pause the video when close overlay
var video = document.querySelector("#video");
video.pause();
  overlay.classList.remove('.show');
}












