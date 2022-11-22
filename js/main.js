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
    badgeEl.style.display = 'none';
  } else {
    badgeEl.style.display = 'block';
  }
  // 0.3 sec
}, 300));