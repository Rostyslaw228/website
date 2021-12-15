$(function(){
    $('.quote__main').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick__btn-prev slick-prev"><img src="img/arrow-left(active).svg" alt=""></button>',
        nextArrow: '<button class="slick__btn-next slick-next"><img src="img/arrow-right(active).svg" alt=""></button>',
    })

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list-active')
    })
    
});

   

