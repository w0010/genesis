$(document).ready(function() {

    $(window).scroll(function() { 


        var scroll = $(window).scrollTop();
        var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();


        if (scroll <= 10) {
            $('#cover').addClass('hide');
        } else {
            $('#cover').removeClass('hide');
        };
    });








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



    var body = document.getElementById('omni');

    setTimeout(function(){
       body.style.opacity = 0;
    });


    setTimeout(function(){
       body.style.opacity = 1;
    }, 2000);



});