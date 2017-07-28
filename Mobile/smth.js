$(document).ready(function() {
     if($(window).width() > 768) {
         $("#img").attr("src", "large.png");
     } else {
         $("#img").attr("src", "small.png");
     }
});