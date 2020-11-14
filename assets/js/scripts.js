$(document).ready(function () {
    //menu open button
    $('.op-btn-1').click(function () {
        $('.menu-area').animate({
            'left': '0',
            'opacity': '1'
        }, 1000);
        $('.menu-area').css({
            'width': '17%',
        });
        
        $('.animation').animate({
            'width': '83%',
        }, 1000);
        $('.header-content-1').css({
            'display': 'none'
        });
        $('.header-content-2').css({
            'display': 'block',
            'opacity': '1'
        });
        $('.color-changer-area').animate({
            'top': '81%'
        }, 1000);
    });
    //menu op-btn-2
    $('.op-btn-2').click(function(){
       
        $('.menu-area').css({
            'width': '100%',
        });
        $('.menu-area').animate({
            'left': '0',
            'opacity': '1'
        }, 1000);
        $('.menu-image-content').css({
            'padding-top': '18rem',
        })
        $('.header-content-1').css({
            'display': 'none',
            'opacity': '10'
        });
        $('.header-content-2').css({
            'display': 'block',
            'opacity': '1'
        });
        
    });
   
    //menu close button
    $('.close-btn-1').click(function () {
        $('.menu-area').animate({
            'left': '-100%',
            'opacity': '0'
        }, 1000);
        $('.animation').animate({
            'width': '100%',
        }, 400);

        $('.header-content-2').css({
            'display': 'none',
            'opacity': '0'
        });
        $('.header-content-1').css({
            'display': 'block',
            'opacity': '1'
        });
        $('.color-changer-area').animate({
            'top': '50%'
        }, 1000);
    });
    //menu close button 2 responsive
    $('.close-btn-2').click(function () {
        $('.menu-area').animate({
            'left': '-100%',
            'opacity': '0'
        }, 1000);
        $('.animation').animate({
            'width': '100%',
        }, 400);
    });
    //menu scroll animation
    $('.menu ul li a').click(function () {
        $('html,body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        return false;
    });

    //about image Owl carousel
    $(".about-image-area").owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-arrow-left"></i>', ' <i class="fas fa-arrow-right"></i>'],
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
    });



    //back to top 
    $('.back-to-top').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 2000);
        return false;
    });






    //PORTFOLIO AREA JS
    //portfolio mixItUp
    var container = ('.portfolio-main')
    var mixer = mixitup(container, {
        load: {
            filter: '.branding'
        },
    });


});

// Windows scroll function
//back to top 
$(window).scroll(function () {
    var scrollvalue = $(this).scrollTop();

    $('.back-to-top span').text(scrollvalue);

    if (scrollvalue > 500) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
});