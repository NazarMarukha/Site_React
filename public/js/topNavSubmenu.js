
$(document).ready(function () {
    $('.mail').click(function (e) {
        e.preventDefault();
        if ($('.call-submenu').css("display") == "block" || $('.rectangle-submenu').css("display") == "block") {
            $('.call-submenu').css("display", "none");
            $('.rectangle-submenu').css("display", "none");
        }
        if (!$('.mail-submenu').hasClass('checked')) {
            $(this).next('.mail-submenu').toggle();
            if (!$('.typa3-first').hasClass('activated')) {
                $('.typa3-first').addClass('activated');
                $('.typa3-first').css("display", "none");
            }
        }
        else {
            $('.mail-submenu-two').toggle();
        }

        // else
        // {
        //     $('.typa3-first').removeClass('activated');
        //     $('.typa3-first').css("display", "");
        // }
    });


    $('.mail-submenu > .five').click(function (e) {

        $('.mail-submenu').css("display", "none");
        $('.mail-submenu').addClass('checked');
    });

    $('.call').click(function (e) {

        e.preventDefault();
        if ($('.mail-submenu').css("display") == "block" || $('.rectangle-submenu').css("display") == "block" || $('.mail-submenu-two').css("display") == "block") {
            $('.mail-submenu').css("display", "none");
            $('.mail-submenu-two').css("display", "none");
            $('.rectangle-submenu').css("display", "none");
        }
        $(this).next('.call-submenu').toggle();
        if (!$('.right-nav-foto1 > .typa8-first').hasClass('activated')) {
            $('.right-nav-foto1 > .typa8-first').addClass('activated');
            $('.right-nav-foto1 > .typa8-first').css("display", "none");
        }
        // else
        // {
        //     $('.typa3-first').removeClass('activated');
        //     $('.typa3-first').css("display", "");
        // }
    });

    $('.call-submenu > .five').click(function (e) {

        e.preventDefault();
        $('.call-submenu-two').toggle();
    });

    $('.rectangle').click(function (e) {

        e.preventDefault();
        if ($('.mail-submenu').css("display") == "block" || $('.call-submenu').css("display") == "block" || $('.mail-submenu-two').css("display") == "block") {
            $('.mail-submenu').css("display", "none");
            $('.mail-submenu-two').css("display", "none");
            $('.call-submenu').css("display", "none");
        }
        $(this).next('.rectangle-submenu').toggle();
        if (!$('.right-nav-foto3 > .typa8-second').hasClass('activated')) {
            $('.right-nav-foto3 > .typa8-second').addClass('activated');
            $('.right-nav-foto3 > .typa8-second').css("display", "none");
        }
        // else
        // {
        //     $('.typa3-first').removeClass('activated');
        //     $('.typa3-first').css("display", "");
        // }
    });
    $('.rectangle-submenu > .five').click(function (e) {

        e.preventDefault();
        $('.rectangle-submenu-two').toggle();
    });

});
