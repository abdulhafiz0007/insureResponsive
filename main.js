const elMenuBtn = document.querySelector(".site-header__menu-btn");

elMenuBtn.addEventListener("click", () => {

    elMenuBtn.closest(".site-header").classList.toggle("active")

})