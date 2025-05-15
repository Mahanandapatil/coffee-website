const menuOpenButton = document.querySelector("#menu-open-button");
const menucloseButton = document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click",() => {
    //Togglr mobikle menu visibility
    document.body.classList.toggle("show-mobile-menu");
})

menucloseButton.addEventListener("click", () =>
 menuOpenButton.click()
)
// initialise swipper
const swiper = new Swiper('.slider-wrapper', {
    
    loop: true,
    spaceBetween: 25,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
       1024 : {
            slidesPerView: 3
        },

    }
  
    
  });