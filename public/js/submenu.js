$(document).ready(function () {
    $('.stroka-right-button > .stroka-submenu').click(function (e) {
       
        e.preventDefault();
        $(this).next('.sub-menu').toggle();
        if (!$('.stroka-right-button').hasClass('openDone'))
        {
            
            $('.stroka-right-button').addClass('openDone');
            $('.caret.down.icon').addClass('activated');
            $('.stroka-right-button').css("border-bottom-left-radius", "0");
            $('.stroka-right-button').css("border-bottom-right-radius", "0");
            $('.stroka-right-button').css("border-bottom", "1px solid #d9d5d5");
        }
        else
        {

            $('.stroka-right-button').removeClass('openDone');
            $('.caret.down.icon').removeClass('activated');
            $('.stroka-right-button').css("border-bottom-left-radius", "0.3rem");
            $('.stroka-right-button').css("border-bottom-right-radius", "0.3rem");
            $('.stroka-right-button').css("border-bottom", "none");
        }
    });

    $('.right-nav-men > .sub-men').click(function (e) {

        e.preventDefault();
        $(this).next('.sub-men-menu').toggle();
        if (!$('.sub-men > .icon-foto').hasClass('activated')) {

            $('.sub-men >.icon-foto').addClass('activated');
        }
        else {
            $('.sub-men >.icon-foto').removeClass('activated');
        }
    });
});
