//  TOGGLE MENU......

const menuList = document.querySelector("#menulist");
const dropList = document.getElementById("hamburger");
console.log(menuList);
function openMenu() {
  menuList.classList.toggle("close_menu");

  document.addEventListener("click", (e) => {
    if (menuList.contains(e.target)) {
      menuList.classList.remove("close_menu");
    }
  });
}
// Show/hide navbar on scroll
let lastScrollTop = 0;
const navbar = document.querySelector("nav");
console.log(navbar);

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // Scroll Down
    navbar.classList.add("hidden");
  } else {
    // Scroll Up
    navbar.classList.remove("hidden");
  }
  lastScrollTop = scrollTop;
});
