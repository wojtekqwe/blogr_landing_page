// const showMenuBtn = document.querySelector(".nav__menu-icon");
// const iconMenu = document.querySelector(".nav__menu-icon img");

// const mobileMenu = document.querySelector(".nav__menu");
// const itemsMenu = document.querySelectorAll(".items__title");
// const items = document.querySelectorAll(".item");
// const iconsMenu = document.querySelectorAll(".items__title i");

// let hamburgerMenu = true;

// const hideOption = () => {
//   items.forEach((item) => {
//     item.classList.remove("show");
//   });
// };

// const showOptionFromMenu = (element) => {
//   hideOption();
//   const array = element.querySelectorAll(".item");
//   array.forEach((item) => {
//     item.classList.toggle("show");
//   });
// };

// const expandList = () => {
//   itemsMenu.forEach((item) => {
//     item.children[0].classList.add("fa-chevron-down");
//     item.children[0].classList.remove("fa-chevron-up");
//     item.addEventListener("click", (e) => {
//       e.target.children[0].classList.add("fa-chevron-up");
//       e.target.children[0].classList.remove("fa-chevron-down");
//       showOptionFromMenu(e.target.parentElement);
//     });
//   });
// };

// const changeIconAndShowOrHideMenu = () => {
//   mobileMenu.classList.toggle("show");
//   if (hamburgerMenu) {
//     iconMenu.src = "./images/icon-close.svg";
//     iconMenu.style.height = "80%";
//     hamburgerMenu = false;
//     expandList();
//   } else {
//     iconMenu.src = "./images/icon-hamburger.svg";
//     iconMenu.style.height = "50%";
//     hamburgerMenu = true;
//     hideOption();
//   }
// };
// showMenuBtn.addEventListener("click", changeIconAndShowOrHideMenu);

const btnHamburger = document.querySelector(".nav__menu-icon");
const mobileMenu = document.querySelector(".nav__menu");
const items = document.querySelectorAll(".menu__items");

const removeClass = () => {
  items.forEach((item) => {
    item.classList.remove("show");
  });
};
const showOrHideOption = (element) => {
  if (element.classList.contains("show")) {
    removeClass();
    element.classList.remove("show");
  } else {
    removeClass();
    element.classList.add("show");
  }
};

const changeIcon = () => {
  btnHamburger.classList.toggle("change-icon");
};

const showOrHideMenu = () => {
  changeIcon();
  mobileMenu.classList.toggle("show");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      showOrHideOption(item);
    });
  });
};

btnHamburger.addEventListener("click", showOrHideMenu);
