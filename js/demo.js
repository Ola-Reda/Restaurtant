//loader
let loader = document.querySelector(".loader");
let load = document.querySelector(".load");
let body = document.querySelector("body");
window.addEventListener("load", () => {
    body.style.overflow = "auto";
    loader.classList.add("loader-hidden");
    load.classList.add("loader-hidden");
});

//header 
let navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
});

//swiper
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

//scroll top 
let btnScroll = document.querySelector(".scroll-top");

btnScroll.addEventListener('click',function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
});

window.onscroll =function () {
    if(window.scrollY >= 400 ){
        btnScroll.classList.add('active');
    }else{
        btnScroll.classList.remove('active');
    }
};