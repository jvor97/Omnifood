$(document).ready(function() {


    /*STICKY NAVIGATION*/

    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '61px;'
    });


    /*SCROLL BUTTONS*/

    $('.js--scroll-to-plans').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
    });
    $('.js--scroll-to-features').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    });
    

    /*SCROLL NAVI*/

    $('a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {
    
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                },1000);
                return false;
            }
        }
    });


    /* ANIMATIONS */

    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    });

});




/*var waypoints = $('#handler-first').waypoint(function(direction) {
    notify(this.element.id + ' hit 25% from top of window') 
  }, {
    offset: '25%'
  })*/