/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
/* eslint-disable no-cond-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable linebreak-style */
/* eslint-disable no-mixed-operators */
/* eslint-disable no-return-assign */
document.addEventListener('DOMContentLoaded', () => {
  const exploreBtn = document.querySelector('.btn');
  exploreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const targetElement = document.getElementById('content');
    smoothScroll(targetElement);
  });

  function smoothScroll(target) {
    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset || window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 250;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
    }

    function easeInOutCubic(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
      return c / 2 * ((t -= 2) * t * t + 2) + b;
    }
  }
});
