
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// _.throttle(func, time)
// create a throttled function that can only call the func parameter maximally once per every 0.3sec
window.addEventListener('scroll', _.throttle(function() {
  if (window.scrollY > 500){
    // hide badges
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // show button
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    // show badges
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // hide button
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
  // 0.3 sec
}, 300));


toTopEl.addEventListener('click', function (){
  gsap.to(window, .7, {
    scrollTo: 0
  });
});

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

new Swiper('.promotion .swiper-container', {
  autoplay: {
    delay: 5000 // 5 sec
  },
  slidesPerView: 3, // number of slides to show at once
  spaceBetween: 10,
  centeredSlides: true, // slide #1 located in the middle
  loop: true,

  pagination:{
    el: '.promotion .swiper-pagination', // Page number element selector
    clickable: true, 
  }, 
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

// This section will be show || hide
const promotionEl = document.querySelector('.promotion');

// If we click promotionToggleBtn
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
 isHidePromotion = !isHidePromotion
  if (isHidePromotion){
    // if isHidePromotion is true add a class name 'hide' to promotionEl
    promotionEl.classList.add('hide');
  }else{
    promotionEl.classList.remove('hide');
  }
});

function random(min, max) {

  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){
  gsap.to(
    selector,
    random(1.5, 2.5),
  {
    y: size,
    repeat: -1, // repeat infintely
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay) // Amount of delay before the animation should begin (in seconds)
  })
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {

  //method chaining
  new ScrollMagic
  .Scene({
    triggerElement: spyEl,
    triggerHook: .8 // triggerElement is in line with the triggerHook, the animation will be triggered
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});


