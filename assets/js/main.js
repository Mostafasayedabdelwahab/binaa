window.addEventListener("scroll", function () {
  var nav = document.getElementById("home_nav");
  let nav_links = document.querySelectorAll(".nav-link");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
    nav.classList.remove("transparent");
    nav_links.forEach((nav_link) => {
      nav_link.classList.add("green");
      nav_link.classList.remove("white");
    });
  } else {
    nav.classList.remove("scrolled");
    nav.classList.add("transparent");
    nav_links.forEach((nav_link) => {
      nav_link.classList.add("white");
      nav_link.classList.remove("green");
    });
  }
});



const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show_section");
      }
    });
  },
  { threshold: 0.3 }
);

sections.forEach((section) => {
  observer.observe(section);
});