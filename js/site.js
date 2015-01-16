$(document).ready(function() {
    $('.sidebar-toggle').on('click', function() {
        $('body').toggleClass('is-sidebar-expanded');
        return false;
    });
    
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[id=' + this.hash.slice(1) +']');
            
            if (target.length) {
                $(".selected").removeClass("selected");
                $(this).addClass("selected");

                $('html, body').animate({scrollTop: target.offset().top}, 1000);
                return false;
            }
        }
    });
    
    $('[data-ga-category]').on('click', function() {
        ga('send', '_trackEvent', $(this).prop('data-ga-category'), $(this).prop('data-ga-action'), $(this).prop('data-ga-label'));
    });
        
    $('.lazy').lazyload({
        effect: 'fadeIn',
        effectspeed: 500,
        'skip_invisible': false
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > ($('header').height() * 4)) {
        $('header[role="banner"]').addClass('pinned');
        $('.scrollup').addClass('show');
    } else {
        $('header[role="banner"]').removeClass('pinned');
        $('.scrollup').removeClass('show');
    }
    
    var h = $('.page:first').height();
    var sIndex = Math.floor($(window).scrollTop() / h);
    var $sItem = $('nav .menu a').eq(sIndex);
    
    if (!$sItem.hasClass('active')) {
        $('.active').removeClass('active');
        $sItem.removeClass('selected').addClass('active');
    }
    
    $('.page').each(function() {
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        if (bottom_of_window > bottom_of_object) {
            $(".page").removeClass("active");
            $(this).addClass("active");
        }
    });
});