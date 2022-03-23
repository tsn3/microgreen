// Slider of products
$(document).ready(function(){
    $('.slider-area').slick({
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 1,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    rows: 1
                }
            },
            {
                breakpoint: 520,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1
                }
            }

        ]
    });
});

// Slider of recommendations products
$(document).ready(function(){
    setTimeout(function () {
        $('#slider-recommendations').slick({
            dots: true,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            rows: 1,
            responsive: [
                {
                    breakpoint: 990,
                    settings: {
                        arrows: false,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        rows: 1
                    }
                },
                {
                    breakpoint: 520,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        rows: 1
                    }
                }
            ]
        });
    }, 3000);
});

// Frontpage Main slider
$('.slidershow').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1
});