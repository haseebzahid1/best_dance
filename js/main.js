
$(window).scroll(function () {
if ($(this).scrollTop() >= 500) {
   $(".back-to-top").fadeIn(200);
} else {
   $(".back-to-top").fadeOut(200);
} 
})
