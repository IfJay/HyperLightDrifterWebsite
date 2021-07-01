window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    $(".navbar").addClass("navbar-OP");
  } else {
    $(".navbar").removeClass("navbar-OP");
  }
}
