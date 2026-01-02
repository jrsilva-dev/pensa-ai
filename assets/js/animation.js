const elements = document.querySelectorAll('[data-animate]');

function animateOnScroll() {
  const windowTop = window.innerHeight * 0.85;

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowTop) {
      element.classList.add('active');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);