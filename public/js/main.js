/*====================================================
                    SMOOTH SCROLLING
====================================================*/
$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get/return id like #about, #work, #team and etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 1250, "easeInOutExpo");
    });
});

$(document).ready(function(){
  // Initialize select2
    $("#selUser").select2();
});
