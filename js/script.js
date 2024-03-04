$(window).on("load",function(){
   $("#loader-wrapper").delay(3000).fadeToggle("fast");
})
$(window).scroll(function(){
   if($(this).scrollTop() > 100){
      $(".navbar").addClass("header-fix");
      $(".topbar").addClass("d-none");
   }
   else{
      $(".navbar").removeClass("header-fix");
      $(".topbar").removeClass("d-none");
   }
})
$(document).ready(function(){
   $(".color-paletts").click(function(){
      $(".colors").slideToggle();
   });
   $(".color").click(function(){
      let color = $(this).attr("id");
      $("#themecss").attr("href","css/" + color + ".css");
   })
})
