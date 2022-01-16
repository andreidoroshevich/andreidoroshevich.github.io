let main = function() {
    $('.icon-menu').click(function() { 
        $('.menu_mobile').animate({ 
            left: '0' }, 200); 

            $('body').animate({left: '90px'}, 200); 
        });



    $('.icon-close').click(function() { 
        $('.menu_mobile').animate({ 
            left: '-175px' 
        }, 200); 
        $('body').animate({left: '0'}, 200);     });
};

$(document).ready(main); 
