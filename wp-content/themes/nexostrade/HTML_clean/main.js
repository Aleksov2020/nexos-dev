const splide = new Splide('.splide', {
    type   : 'loop',
    perPage: 8,
    arrows: false,
    pagination: false,
    autoScroll: {
      speed: 1,
      rewind: true,
      pauseOnHover: false,
      pauseOnFocus: false,
    },
    breakpoints: {
      1800: {
        perPage: 7,
      },
      1600: {
        perPage: 6,
      },
      1360: {
        perPage: 5,
      },
      1140: {
        perPage: 4,
      },
      904: {
        perPage: 3,
      },
      767: {
        perPage: 2,
      },
      400: {
        perPage: 2,
      }
    }
    
});


splide.mount(window.splide.Extensions);

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, options);

const elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

elements.forEach(element => {
  observer.observe(element);
});