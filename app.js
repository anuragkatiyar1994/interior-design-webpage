const hamburgerIcon = document.querySelector(".hamburger-icon");
const mobileMenu = document.querySelector(".mobile-menu");
let closeMenu = document.querySelector(".mobile-menu li span.close-icon");
let link = document.querySelectorAll(".mobile-menu li a");


hamburgerIcon.addEventListener("click", () => {
  mobileMenu.classList.add("show");
});

closeMenu.addEventListener("click", function () {
  mobileMenu.classList.remove("show");
});
link.forEach((ele)=>{
    ele.addEventListener("click", () =>{
        mobileMenu.classList.remove("show")
    })
})
