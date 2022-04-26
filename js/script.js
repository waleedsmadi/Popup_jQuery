$(window).ready(function(){
    "use strict";


    // showing up the pic when click on it
    $(".container img").click(function(){
        $(".overlay").show();
    });


    // hide the pic when click on overlay or close button
    $(".overlay, .close-btn").click(function(){
        $(".overlay").hide();
    });
});