/* ======================================== */
/* MOBILE_MENU_TOGGLE */
/* ======================================== */

const menuToggle = document.getElementById("menuToggle");
const mobileDrawer = document.getElementById("mobileDrawer");
const menuClose = document.getElementById("menuClose");

menuToggle.addEventListener("click", function () {
    mobileDrawer.classList.add("active");
});

menuClose.addEventListener("click", function () {
    mobileDrawer.classList.remove("active");
});