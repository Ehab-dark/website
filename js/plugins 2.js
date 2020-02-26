/*global $, jQuery,console*/


/* This file modified from me */
$(document).ready(function () {
    "use strict";


     //to control with speed images
     $(".carousel").carousel({
         interval: 5000
     });
 
     //show coloroption div when i click on gear
     $(".gear-check").click(function () {
         $(".color-option").fadeToggle(1000);
     });
     
     //Change theme color on click
     $(".color-option ul li")
     .eq(0).css("backgroundColor", "rgb(150, 53, 7)").end()
     .eq(1).css("backgroundColor", "rgba(248, 6, 6, 0.966)").end()
     .eq(2).css("backgroundColor", "rgb(15, 15, 211)").end()
     .eq(3).css("backgroundColor", "orange").end()
     .eq(4).css("backgroundColor", "#E426D5");
     
     $(".color-option ul li").click(function () {
         
         $("link[href*='theme']").attr("href", $(this).attr('data-value'));
         
         //console.log($("link[href*='theme']"));//i found the link know i need href
         //$("link[href*='theme']").remove();
         //console.log($(this).attr('data-value'));
     });
         /*              for Scroll Top      ***********************/
 
 $(window).scroll(function () {
     
     "use strict";
     //console.log($(window).scrollTop());
     
     if ($(this).scrollTop() >= 800) {
         $(".scroll-top").fadeIn(1000);
         }else 
          {
         $(".scroll-top").hide();
 }
 
 
             // 			1th    method
     $(".scroll-top").on("click", function () {
         $(window).scrollTop(0);
      });
     
     
         // 			2th    method
      /*$("div.scroll-top").on("click", function () {
     $("html,body").animate(
     {
      scrollTop : 0
    }, 600);
 
     });*/
    
 
 });
 
 
 
     $(window).load(function () {
         $("body").css("overflow","auto");
         $(".loading-overlay").fadeOut(3000);
 
     });
 
    });