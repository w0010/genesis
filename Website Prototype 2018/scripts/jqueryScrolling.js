//nav on upscroll hidden on downscroll
/*(function() {
    var documentElem = $(document),
        nav = $('#nav'),
        lastScrollTop = 0;

    documentElem.on('scroll', function() {
        var currentScrollTop = $(this).scrollTop();
        if ( currentScrollTop > lastScrollTop ) nav.addClass('hidden');
        else nav.removeClass('hidden');
        lastScrollTop = currentScrollTop;   
    });
})();*/








$(document).ready(function() {










    (function($) {
    
        var allPanels = $('.faq > article').hide();
    
        $('.faq > a > h2').click(function() {
            allPanels.slideUp();
            $(this).parent().next().slideDown();
    
            return false;
        });

    })(jQuery);





















    /*
    $('.nav-1').click(function() {

        $('.info').addClass('info-visible');
    });*/




//anchor link function
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1200, 'swing', function () {
            window.location.hash = target;
        });
    });


//scroll function
    $(window).scroll(function() { 


        var scroll = $(window).scrollTop();
        var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();


        if (scroll > 150) {
            $('.eye-1').addClass('eye-open');
        }

        
        if (scrollBottom <= 50) {
            $('.eye-2').addClass('eye-close');
        } else {
            $('.eye-2').removeClass('eye-close');
        }


        if (scrollBottom <= 10) {
            $('.thank-you').addClass('thank-you-visible');
        } else {
            $('.thank-you').removeClass('thank-you-visible');
        }
    });




    setTimeout(function(){
        $('.cover-1').addClass('load-expandY');
    });


    setTimeout(function(){
        $('.nav-1').addClass('loadFade');
    }, 1000);


    setTimeout(function(){
        $('.nav-2').addClass('loadFade');
    }, 1000);
});