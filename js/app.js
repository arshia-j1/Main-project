const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navLinks = document.querySelector("#nav-links");
const links = document.querySelectorAll(".scroll-link");

// sticky navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});

// toggle menu
navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// scroll speed 
function smoothScrollTo(targetY, duration = 1500) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const ease = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

// close menu + smooth scroll
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = link.getAttribute("href").slice(1);
    const section = document.getElementById(id);

    // close menu FIRST
    navLinks.classList.remove("show");

    // scroll
    if (section) {
      const offset = 100;
      const targetY = section.offsetTop - offset;

      smoothScrollTo(targetY, 1500);
    }
  });
});


// set year
date.innerHTML = new Date().getFullYear();