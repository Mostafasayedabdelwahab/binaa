
/////////////////// loading ///////////////
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a"); // تحديد جميع الروابط في الصفحة
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (
        (!link.target || link.target === "_self") &&
        !link.href.includes("#")
      ) {
        e.preventDefault(); // منع التنقل الفوري
        const loading = document.getElementById("loading");
        if (loading) loading.classList.remove("hidden"); // إظهار اللودينج إذا كان موجودًا
        setTimeout(() => {
          window.location.href = link.href; // تحميل الصفحة الجديدة
        }, 100); // يمكنك تعديل وقت الانتظار
      }
    });
  });
});

// جعل اللودينج يبقى على الأقل 1 ثانية بعد تحميل الصفحة
window.addEventListener("load", function () {
  const loading = document.getElementById("loading");
  if (loading) {
    setTimeout(() => {
      loading.classList.add("hidden");
    }, 1500); // إجبار اللودينج على البقاء 1 ثانية على الأقل
  }
});

// إظهار اللودينج عند الرجوع للخلف إذا كان موجودًا
window.addEventListener("popstate", function () {
  const loading = document.getElementById("loading");
  if (loading) {
    loading.classList.remove("hidden");
    setTimeout(() => {
      loading.classList.add("hidden");
    }, 500);
  }
});

/////////////////// loading ///////////////



/////////////////// burger ///////////////

const burger = document.getElementById("burger");
const links = document.querySelector(".links");

burger.addEventListener("change", function () {
  links.classList.toggle("show-links");
});
/////////////////// burger ///////////////

/////////////////// nav scroll///////////////

window.addEventListener("scroll", function () {
  var nav = document.getElementById("home_nav");
  let nav_links = document.querySelectorAll(".my-nav-link a");
  let home_img = document.querySelector(".nav-header .navbar-brand img");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
    nav.classList.remove("transparent");
    home_img.classList.add("logo-green");
    home_img.classList.remove("logo-white");
    nav_links.forEach((nav_link) => {
      nav_link.classList.add("green");
      nav_link.classList.remove("white");
    });
  } else {
    nav.classList.remove("scrolled");
    nav.classList.add("transparent");
    home_img.classList.add("logo-white");
    home_img.classList.remove("logo-green");
    nav_links.forEach((nav_link) => {
      nav_link.classList.add("white");
      nav_link.classList.remove("green");
    });
  }
});

/////////////////// nav scroll///////////////


/////////////////// sections scroll///////////////

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show_section");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => {
  observer.observe(section);
});

document.getElementById("Copy_year").textContent = new Date().getFullYear();

document.querySelectorAll(".faq-button").forEach((e) => {
  let data_color = e.getAttribute("data-color");
  e.addEventListener("mouseenter", () => {
    e.style.color = data_color;
    document.querySelectorAll(".tooltip").forEach((el) => {
      el.style.backgroundColor = data_color;
    });
  });
  e.addEventListener("mouseleave", () => {
    e.style.color = "black";
  });
});
/////////////////// sections scroll///////////////
