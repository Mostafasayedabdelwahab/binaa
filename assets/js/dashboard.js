// rightMenu//
document.addEventListener("DOMContentLoaded", function () {
  let menuToggle = document.getElementById("rightMenuToggle");
  let sidebar = document.querySelector(".rightMenu");
  let eye = document.querySelector("#rightMenuToggle i ");
  let menuTexts = document.querySelectorAll(".rightMenu span");
  let links = document.querySelectorAll(".rightMenu a");

  if (window.matchMedia("(max-width: 768px)").matches) {
    menuToggle.addEventListener("click", function (event) {
      event.stopPropagation(); // منع إغلاق القائمة عند الضغط على الزر
      toggleMenu();
    });

    document.addEventListener("click", function (event) {
      let isClickInside =
        sidebar.contains(event.target) || menuToggle.contains(event.target);
      if (!isClickInside) {
        closeMenu();
      }
    });
    function toggleMenu() {
      if (sidebar.style.minWidth === "230px") {
        closeMenu();
      } else {
        openMenu();
      }
    }

    function openMenu() {
      sidebar.style.minWidth = "230px";
      menuTexts.forEach((text) => (text.style.display = "inline-block"));
      links.forEach((link) => (link.style.textAlign = "start"));
      eye.classList.remove("fa-eye-slash");
      eye.classList.add("fa-eye");
    }

    function closeMenu() {
      sidebar.style.minWidth = "35px";
      menuTexts.forEach((text) => (text.style.display = "none"));
      links.forEach((link) => (link.style.textAlign = "center"));
      eye.classList.add("fa-eye-slash");
      eye.classList.remove("fa-eye");
    }
  }
});

// notificationsDropdown//
var dropdown = document.getElementById("notificationsDropdown");
function toggleNotifications() {
  if (
    dropdown.style.transform === "translateX(-250%)" ||
    dropdown.style.transform === ""
  ) {
    dropdown.style.transform = "translateX(-50%)";
  } else {
    dropdown.style.transform = "translateX(-250%)";
  }
}
document.addEventListener("click", function (event) {
  var dropdown = document.getElementById("notificationsDropdown");
  var dropdownContainer = document.getElementById("notificationsButton");

  // التأكد من أن الضغط ليس داخل القائمة أو الزر الذي يفتحها
  if (!dropdownContainer.contains(event.target)) {
    dropdown.style.transform = "translateX(-250%)";
  }
});


// profileDropdown//
var profileDropdown = document.getElementById("profileDropdown");
function toggleprofileDropdown() {
  if (
    profileDropdown.style.transform === "translateX(-250%)" ||
    dropdown.style.transform === ""
  ) {
    profileDropdown.style.transform = "translateX(0%)";
  } else {
    profileDropdown.style.transform = "translateX(-250%)";
  }
}
document.addEventListener("click", function (event) {
  var profileDropdown = document.getElementById("profileDropdown");
  var profileDropdownbtn = document.getElementById("profileDropdownbtn");

  // التأكد من أن الضغط ليس داخل القائمة أو الزر الذي يفتحها
  if (!profileDropdownbtn.contains(event.target)) {
    profileDropdown.style.transform = "translateX(-250%)";
  }
});

// textarea//
 var  textarea = document.getElementById("autoResize");
 textarea.addEventListener("input", function () {
   this.style.height = "auto";
   this.style.height = this.scrollHeight + "px";
 });
