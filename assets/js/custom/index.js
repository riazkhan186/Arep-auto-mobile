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
    });
    $(document).ready(function () {

        // counter up
        $('.counter').counterUp({
            delay: 10,
            time: 1500
        });


       









    });
})(jQuery)