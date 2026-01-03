const dataAnimateElements = document.querySelectorAll("[data-animate]");

function animateOnScroll() {
  const windowTop = window.innerHeight * 0.85;

  dataAnimateElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowTop) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

const fadeInElements = document.querySelectorAll(".fade-in");

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

fadeInElements.forEach((element) => fadeObserver.observe(element));
