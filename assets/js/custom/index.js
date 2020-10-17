(function ($) {
    $(document).ready(function () {
        // for sticky navbar
        $(window).scroll(function () {
            if ($(window).scrollTop() > 0) {
                $(".topbar").addClass("sticky");
            }
            else {
                $(".topbar").removeClass("sticky");
            }
        });
    });

      // menu bar hide on click li
      $(document).ready(function () {

        $('.navbar-toggler').click(function () {
            // $('.navbar-toggler').addClass("collapsed");
            // $(".navbar-collapse").toggle();
            $('.collapse').toggle();

        });
    });

    $('.navbar-collapse a').click(function () {
        // $('.navbar-toggler').addClass("collapsed");
        $(".navbar-collapse").toggle();
        // $('.collapse').toggle();
        // $(".navbar-collapse").collapse('hide');

    });


     // barfiller
     $(document).ready(function () {
        $('#bar1').barfiller({
            tooltip: false,
            barColor: "#DFB871",
            duration: 2000
        });
        $('#bar2').barfiller({
            tooltip: false,
            barColor: "#DFB871",
            duration: 2000
        });
        $('#bar3').barfiller({
            tooltip: false,
            barColor: "#DFB871",
            duration: 2000
        });
        $('#bar4').barfiller({
            tooltip: false,
            barColor: "#DFB871",
            duration: 2000
        });
        $('#home3-bar1').barfiller({
            tooltip: false,
            barColor: "#F06529",
            duration: 2000
        });
        $('#home3-bar2').barfiller({
            tooltip: false,
            barColor: "#F06529",
            duration: 2000
        });
        $('#home3-bar3').barfiller({
            tooltip: false,
            barColor: "#F06529",
            duration: 2000
        });
        $('#home3-bar4').barfiller({
            tooltip: false,
            barColor: "#F06529",
            duration: 2000
        });
    });
    $(document).ready(function () {

        // counter up
        $('.counter').counterUp({
            delay: 10,
            time: 1500
        });


        // home two
        $('.project-slider').owlCarousel({
            center:true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            responsive : {
                0:{
                    items: 1,
                },
                768:{
                    items: 2,
                },
                992: {
                    items: 2.8,
                }
            }
        });
        $('.feedback-slider').owlCarousel({
            center:true,
            items: 1,
            loop: true,
            // autoplay: true,
            // autoplayTimeout: 4000,
            autoplayHoverPause: true,
            

        });
        //   venobox for video
        $(document).ready(function(){
            $('.venobox').venobox(); 
        });

    });
})(jQuery)