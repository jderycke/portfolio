(function () {
    'use strict';
    
    $('.toggle-nav').on('click', function () {
        $('body').toggleClass('is-sidebar-expanded');
        return false;
    });
    
    $('.toggle-back').on('click', function (e) {
        window.history.back();
        return false;
    });
    
    $('a[href*=#]:not([href=#])').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[id=' + this.hash.slice(1) + ']');
            
            if (target.length) {
                $('.active').removeClass('active');
                $(this).addClass('active');

                $('html, body').animate({scrollTop: target.offset().top}, 1000);
                
                return false;
            }
        }
    });
    
    $('[data-ga-category]').on('click', function () {
        ga('send', '_trackEvent', $(this).prop('data-ga-category'), $(this).prop('data-ga-action'), $(this).prop('data-ga-label'));
    });

    var sections = $('.page');
    
    window.onscroll = function () {
        var currentScroll = $(this).scrollTop(),
            currentSection,
            id;

        sections.each(function () {
            var divPosition = $(this).offset().top;

            if (divPosition - 1 < currentScroll) {
                currentSection = $(this);
            }
            
            id = currentSection.prop('id');
            $('a').removeClass('active');
            $('[href=#' + id + ']').addClass('active');
        });
    };
}($));