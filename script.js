// function darkFunction() {
//   let element = document.body;
//   element.classList.toggle("dark-mode");
//   if (document.body.classList.contains("dark-mode")) {
//     icon.src = "/img/dark theme icon/dark theme icon/sun.png";
//   } else {
//     icon.src = "/img/dark theme icon/dark theme icon/moon.png";
//   }
// }

function darkFunction() {
  var icon = document.getElementById("dark-icon");

  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    icon.src = "/img/dark theme icon/dark theme icon/sun.png";
  } else {
    icon.src = "/img/dark theme icon/dark theme icon/moon.png";
  }
}

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

document.getElementById("nav-toggle").addEventListener("click", function () {
  var navLinks = document.getElementById("nav-links");
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
});
