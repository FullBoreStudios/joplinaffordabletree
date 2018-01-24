// FB Studios :: Affordable Tree

// Ream more of the about us section, slow slideToggle, also hides read more button
$(document).ready(function(){
  $(".readmore").on("click", function(){
    $(".readmorestuff").slideToggle("slow");
    $(".readmore").slideToggle("slow");
  });
});
