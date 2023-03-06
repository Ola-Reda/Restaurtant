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












