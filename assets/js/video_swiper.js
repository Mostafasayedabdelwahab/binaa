var swiper = new Swiper(".swiper-container", {
  spaceBetween: 10,
  speed: 700,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  on: {
    slideChange: function () {
      updateProgressIndicator();
    },
  },
});

document.querySelectorAll(".swiper-slide").forEach((slide) => {
  slide.addEventListener("click", function () {
    let videoSrc = this.getAttribute("data-video");
    let videoTitle = this.getAttribute("data-title"); // جلب العنوان

    document.getElementById("main-video").classList.add("fade-out");
    setTimeout(() => {
      document.getElementById("main-video").src = videoSrc;
      document.getElementById("title-video").textContent = videoTitle; // تحديث العنوان
      document.getElementById("main-video").classList.remove("fade-out");
    }, 500);
  });
});
// تحديث موقع المؤشر الصغير
function updateProgressIndicator() {
  let indicator = document.getElementById("progress-indicator");
  let totalSlides = swiper.slides.length;
  let currentSlideIndex = swiper.activeIndex;
  let visibleSlides = swiper.params.slidesPerView;
  let progress = (currentSlideIndex / (totalSlides - visibleSlides)) * 100;

  if (progress == 0) indicator.style.left = `calc(${progress}%)`;
  else indicator.style.left = `calc(${progress}% - 30px)`;
}
function toggleProgressBar() {
  let progressBar = document.getElementById("progress-bar");
  let totalSlides = swiper.slides.length;

  if (totalSlides <= swiper.params.slidesPerView) {
    progressBar.style.display = "none"; // إخفاء الشريط
  } else {
    progressBar.style.display = "block"; // إظهاره عند وجود أكثر من 3 فيديوهات
  }
}
toggleProgressBar();

function updateThumbnails() {
  let slides = document.querySelectorAll(".swiper-slide"); // جميع السلايدات

  slides.forEach((slide) => {
    let videoLink = slide.getAttribute("data-video"); // رابط الفيديو المخزن في data-video
    let thumbnail = slide.querySelector(".video-thumbnail"); // عنصر الصورة

    if (videoLink && thumbnail) {
      let videoId = extractVideoID(videoLink); // استخراج ID الفيديو
      let isYouTube =
        videoLink.includes("youtube.com") || videoLink.includes("youtu.be");
      let isDrive = videoLink.includes("drive.google.com");

      if (isYouTube && videoId) {
        thumbnail.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // صورة YouTube
      } else if (isDrive && videoId) {
        thumbnail.src = `https://drive.google.com/thumbnail?id=${videoId}`; // صورة Google Drive
      }
    }
  });
}

// دالة استخراج ID الفيديو سواء كان YouTube أو Google Drive
function extractVideoID(url) {
  let youTubeMatch = url.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  );
  let driveMatch = url.match(/(?:drive\.google\.com\/file\/d\/|id=)([^\/&?]+)/);

  return youTubeMatch ? youTubeMatch[1] : driveMatch ? driveMatch[1] : null;
}

// استدعاء الدالة عند تحميل الصفحة
updateThumbnails();
