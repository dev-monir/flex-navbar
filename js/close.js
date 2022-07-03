/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    if (menu.querySelector(".submenu-active")) {
      let isClickInside = menu
        .querySelector(".submenu-active")
        .contains(e.target);
   
      if (!isClickInside && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
      }
    }
  }
   
  /* Event listener */
  document.addEventListener("click", closeSubmenu, false);