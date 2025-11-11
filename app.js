//  TOGGLE MENU......

const menuList = document.querySelector("#menulist");
const dropList = document.getElementById("hamburger");

function openMenu() {
  menuList.classList.toggle("close_menu");

  document.addEventListener("click", (e) => {
    if (menuList.contains(e.target)) {
      menuList.classList.remove("close_menu");
    }
  });
}
