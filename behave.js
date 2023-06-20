const ham = document.querySelector('.hamburger');
const nav_menus = document.querySelector('.nav-menu');

ham.addEventListener("click", ()=>{
    ham.classList.toggle("active");
    nav_menus.classList.toggle("active");
})