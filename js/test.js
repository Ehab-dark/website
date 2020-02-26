/*global console, $, jquery, window*/
$(window).scroll(function () {
	
	"use strict";
    console.log($(this).scrollTop());
	
    if ($(this).scrollTop() >= 800) {
        $(".scroll-top").fadeIn(1000);
    } else 
	 {
    $(".scroll-top").hide();
    }
    // 			1th    method
    $(".scroll-top").click(function () {
    $("html,body").animate(
	{
     scrollTop : 0
   }, 600);


        // 			2th    method
    /*$(".scroll-top").on("click", function () {
        $(window).scrollTop(0);
     });*/
        
    //console.log($(this).scrollTop() );
    
    });
});
