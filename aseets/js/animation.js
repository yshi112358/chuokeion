window.addEventListener("load", function () {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
});

var ua = navigator.userAgent;
var parallaxBkImg = function () {
    $(window).on('load resize', function () {
        $(window).on('load scroll', function () {
            var $winTop = $(window).scrollTop();
            var $target = $('.fixed-background');
            var $winWidth = $(window).width();
            if (ua.indexOf("iPhone") > 0 || ua.indexOf("iPad") > 0 || ua.indexOf("iPod") > 0) {
                $target.each(function (index) {
                    var $position = $winTop - $target.eq(index).offset().top;
                    if ($winTop > $target.eq(index).offset().top - 800) {
                        $target.eq(index).css({
                            'background-position-y': $position * .4
                        });
                    }
                });
            }
        });
    });
}();

if (ua.indexOf("iPhone") > 0 || ua.indexOf("iPad") > 0 || ua.indexOf("iPod") > 0)
    $('.fixed-background').css('background-attachment', 'scroll');
else
    $('.fixed-background').css('background-attachment', 'fixed');
