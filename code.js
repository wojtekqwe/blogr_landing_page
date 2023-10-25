const btnHamburger = document.querySelector(".nav__menu-icon");
const mobileMenu = document.querySelector(".nav__menu");
const items = document.querySelectorAll(".menu__items");

const removeClass = (className) => {
  items.forEach((item) => {
    item.classList.remove(className);
  });
};
const showOrHideOption = (element, className) => {
  if (element.classList.contains(className)) {
    removeClass(className);
    element.classList.remove(className);
  } else {
    removeClass(className);
    element.classList.add(className);
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
      showOrHideOption(item, "show");
    });
  });
};

btnHamburger.addEventListener("click", showOrHideMenu);

// Menu on desktop
const desktopMenuItems = document.querySelectorAll(".nav__menu-desktop .items");

desktopMenuItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.classList.add("showMenu");
  });
  item.addEventListener("mouseout", () => {
    item.classList.remove("showMenu");
  });
});
