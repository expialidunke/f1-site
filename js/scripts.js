$(document).ready(function() {
    if ($(".banners ul").length) {
        $(".banners ul").bxSlider({
            auto: true,
            mode: 'fade',
            speed: 1000,
            controls: false,
            pause: 5000,
            pager: false,
            captions: true,
        });
    }

    var duration = 10000;
    var transitionDuration = 500;
    var $slides = $('.slide');
    var currentIndex = 0;

    if ($slides.length) {
        $slides.eq(currentIndex).show();
    }

    function showNextSlide() {
        $slides.eq(currentIndex).fadeOut(transitionDuration, function() {
            $(this).removeClass('ativo');
            currentIndex = (currentIndex + 1) % $slides.length;
            $slides.eq(currentIndex).fadeIn(transitionDuration).addClass('ativo');
        });
    }

    if ($slides.length) {
        setInterval(showNextSlide, duration);
    }

    $("a[href^='#']").click(function(e) {
        e.preventDefault();
        var target = $($(this).attr("href"));
        if (target.length) {
            var position = target.offset().top;
            var headerHeight = window.innerHeight * 0.095;
            $("html, body").animate({
                scrollTop: position - headerHeight
            }, 600);
        }
    });
});
