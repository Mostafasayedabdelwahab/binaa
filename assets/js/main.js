/////////////////// loading ///////////////
document.addEventListener("DOMContentLoaded", function () {
  const loading = document.getElementById("loading");
  const elements = document.querySelectorAll("header, nav, section, div");

  let visibleCount = 0;
  let observerTimeout;

  if (loading && elements.length > 0) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleCount++;
          }
        });

        if (visibleCount >= 4) {
          // إذا تم تحميل أول ٣ عناصر
          clearTimeout(observerTimeout); // إلغاء المؤقت إذا تحقق الشرط
          setTimeout(() => {
            loading.classList.add("hidden"); // إخفاء اللودر
            observer.disconnect(); // إيقاف المراقبة
          }, 1000); // اجعلها أسرع بمجرد ظهور المحتوى
        }
      },
      { root: null, threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));

    // إذا لم يتم تحميل العناصر خلال ١٥٠٠ مللي ثانية، أخفِ اللودر تلقائيًا
    observerTimeout = setTimeout(() => {
      loading.classList.add("hidden");
      observer.disconnect();
    }, 1000);
  }
});

// عند التنقل بين الصفحات
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (e) {
    if (
      link.target === "_self" || // السماح بالروابط التي تفتح في نفس الصفحة
      link.href.includes("#") // السماح بالروابط الداخلية
    ) {
      return;
    }
    // التحقق مما إذا كان الرابط خارجيًا
    const isExternal = !link.href.startsWith(window.location.origin);
    if (isExternal) {
      return; // إذا كان الرابط خارجيًا، لا تفعل اللودر
    }

    e.preventDefault();
    const loading = document.getElementById("loading");
    if (loading) loading.classList.remove("hidden");

    setTimeout(() => {
      window.location.href = link.href;
    }, 100);
  });
});

// عند الرجوع للخلف
window.addEventListener("pageshow", function (event) {
  const loading = document.getElementById("loading");

  // event.persisted تعني أن الصفحة تم تحميلها من الكاش عند الرجوع للخلف
  if (loading && event.persisted) {
    loading.classList.remove("hidden");

    setTimeout(() => {
      loading.classList.add("hidden");
    }, 1000);
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

///////////////////togglePassword ///////////////

document.querySelectorAll(".eyePassword").forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", function () {
    const passwordInput = this.closest(".position-relative").querySelector(".password");
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
  });
});
///////////////////togglePassword///////////////
