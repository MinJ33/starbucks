const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
// _.throttle(func, time)
// create a throttled function that can only call the func parameter maximally once per every 0.3sec
window.addEventListener('scroll', _.throttle(function() {
  console.log('scroll!');
  if (window.scrollY > 500){
    // hide badges
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    // show badges
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
  // 0.3 sec
}, 300));


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1, 2.7
    opacity: 1
  });
});


new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});