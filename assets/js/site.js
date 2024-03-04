// write cool JS hwere!!
const hamburgerBtn = document.getElementById("hamburger");
const navList = document.querySelector(".main-list");

hamburgerBtn.addEventListener("click", () => {
    navList.classList.toggle("show-nav");
})