var swiper = new Swiper(".mySwiper-1" ,{
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable:true,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    }
});

var swiper = new Swiper(".mySwiper-2" ,{
    slidesPerView:2,
    spaceBetween: 30,
    loop:true,
    loopFillGroupWithblank:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    breakpoints : {
        0:{
            slidesPerView:1
        },
        520:{
            slidesPerView:2
        },
        950:{
            slidesPerView:3
        },
    }
});