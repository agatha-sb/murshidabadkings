// ************************************************* //
// * +++++++++++++ 01. LOCOMOTIVE ++++++++++++++ * //
// ************************************************* //
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});


// ************************************************* //
// * +++++++++++++ 02. Header sticky & navbar ++++++++++++++ * //
// ************************************************* //
scroll.on('scroll', (args) => {
  if (args.scroll.y > 0) {
      document.body.classList.add('scrolled');
  } else {
      document.body.classList.remove('scrolled');
  }
});

Fancybox.bind('[data-fancybox="gallery-1"]', {
  caption: function (fancybox, slide) {
    const figurecaption = slide.triggerEl?.querySelector(".tab-caption");
    return figurecaption ? figurecaption.innerHTML : slide.caption || "";
  },
});
Fancybox.bind('[data-fancybox="gallery-2"]', {
  caption: function (fancybox, slide) {
    const figurecaption = slide.triggerEl?.querySelector(".tab-caption");
    return figurecaption ? figurecaption.innerHTML : slide.caption || "";
  },
});
Fancybox.bind('[data-fancybox="gallery-3"]', {
  caption: function (fancybox, slide) {
    const figurecaption = slide.triggerEl?.querySelector(".tab-caption");
    return figurecaption ? figurecaption.innerHTML : slide.caption || "";
  },
});


var mensSquadSwiper = new Swiper(".mk2-squad__kings-swiper", {
  autoPlay: false,
  spaceBetween: "15px",
  loop: true,
  grid: {
    rows: 2,
    fill: "row",
  },
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 2.5
    },
    768: {
      slidesPerView: 2.5
    },
    1024: {
      slidesPerView: 3,
      navigation: false
    }
  }
});

var womensSquadSwiper = new Swiper(".mk2-squad__kueens-swiper", {
  autoPlay: false,
  spaceBetween: "15px",
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 2.5
    },
    768: {
      slidesPerView: 2.5
    },
    1024: {
      slidesPerView: 3,
      navigation: false
    }
  }
});
var fixturesSwiper = new Swiper(".mk2-fixtures__matches-swiper", {
  direction: "vertical",
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    480: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

$('.popup-youtube').magnificPopup({
  type: 'iframe',
  iframe: {
    patterns: {
      youtube: {
        index: 'youtube.com/',
        id: function (url) {
          var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
          if (!m || !m[1]) return null;
          return m[1];
        },
        src: '//www.youtube.com/embed/%id%?autoplay=1'
      },
      vimeo: {
        index: 'vimeo.com/',
        id: function (url) {
          var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
          if (!m || !m[5]) return null;
          return m[5];
        },
        src: '//player.vimeo.com/video/%id%?autoplay=1'
      }
    }
  }
});
// Hero

// gsap.registerPlugin(ScrollTrigger);

// const pageContainer = document.querySelector("main");

// /* SMOOTH SCROLL */


// scroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(pageContainer, {
//   scrollTop(value) {
//     return arguments.length
//       ? scroller.scrollTo(value, 0, 0)
//       : scroller.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       left: 0,
//       top: 0,
//       width: window.innerWidth,
//       height: window.innerHeight
//     };
//   },
//   pinType: pageContainer.style.transform ? "transform" : "fixed"
// });

// ////////////////////////////////////
// ////////////////////////////////////
// window.addEventListener("load", function () {
//   let pinBoxes = document.querySelectorAll(".pin-wrap > *");
//   let pinWrap = document.querySelector(".pin-wrap");
//   let pinWrapWidth = pinWrap.offsetWidth;
//   let horizontalScrollLength = pinWrapWidth - window.innerWidth;

//   // Pinning and horizontal scrolling

//   gsap.to(".pin-wrap", {
//     scrollTrigger: {
//       scroller: pageContainer, //locomotive-scroll
//       scrub: true,
//       trigger: ".mk2-franchise",
//       pin: true,
//       // anticipatePin: 1,
//       start: "top top",
//       end: pinWrapWidth
//     },
//     x: -horizontalScrollLength,
//     ease: "none"
//   });

//   ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

//   ScrollTrigger.refresh();
// });


