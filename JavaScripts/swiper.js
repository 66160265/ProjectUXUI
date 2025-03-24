var swiper = new Swiper('.swiper', {
    slidesPerView: 4,  /* จำนวนรายการที่แสดงต่อแถว */
    spaceBetween: 10,  /* ระยะห่างระหว่างรายการ */
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1024: { slidesPerView: 4 },
        768: { slidesPerView: 3 },
        480: { slidesPerView: 2 },
        320: { slidesPerView: 1 }
    }
});