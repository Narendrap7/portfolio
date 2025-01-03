$(document) .ready(function() {
   /*Sidebar Menu*/
   "use strict";
   $('#sidebar-btn').on('click', function() {
      $('#sidebar').toggleClass('visible');
   });


   /*Navigation*/
   $(function() {
   $('a[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

   /*Magnific Popup*/
   $(function() {
    $('div.gallery').magnificPopup({delegate: 'a', 
      type: 'image',
      gallery: {
        enabled: true
      },
      removalDelay: 200,
      mainClass: 'mfp-fade'
    });
   });  
    
}); 
});

   

new Typed('#typed',{
  strings : ['I am Narendra Patil','I am Full Stack Developer','I am Passionate about Coding'],
  typeSpeed : 200,
  delaySpeed : 100,
  loop : true
});




$(".skills").addClass("active")
$(".skills .skill .skill-bar span").each(function() {
   $(this).animate({
      "width": $(this).parent().attr("data-bar") + "%"
   }, 1000);
   $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
});
setTimeout(function() {
   $(".skills .skill .skill-bar span b").animate({"opacity":"1"},1000);
}, 2000);