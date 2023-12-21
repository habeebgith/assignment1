const navToggle = document.querySelector(".btn");
const links = document.querySelector(".nav-links");


navToggle.addEventListener("click", function(){


links.classList.toggle('active');
})