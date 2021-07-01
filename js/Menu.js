$(document).ready(function(){
  var resize = $( window ).width();
  $(window).resize(function(){    // RECALL EVRY RESIZE
    resize = $( window ).width();
    assignwidth(resize);
  });
  assignwidth(resize);
  $("#video").trigger("load");
  //ALGORITHM
  $("#dx").click(function() {
    if ($("#overlay").hasClass("Isoverlayed")) {
      if (!$("#dx").hasClass("dx-up")) {
        //for DESKTOP
        $("#dx").addClass("dx-up");
        $(".download").addClass("download-up");
        $(".objs").addClass("objs-up");
      } else {
        $("#dx").removeClass("dx-up");
        $(".download").removeClass("download-up");
        $(".objs").removeClass("objs-up");
      }
    }
    if ($("#objs").hasClass("Isactive")) {
      if (!$(".overlay").hasClass("overlay-true")) {
        // for MOBILE
        $(".overlay").addClass("overlay-true");
        $(".corpo").addClass("corpo-true");
        $(".overlay-content").addClass("OVlink-true");
        $(".overlay-content").removeClass("OVlink-false");
      }
    }
  });
  $("#overlay").click(function() {
    $(".overlay").removeClass("overlay-true");
    $(".corpo").removeClass("corpo-true");
    $(".overlay-content").removeClass("OVlink-true");
    $(".overlay-content").addClass("OVlink-false");
  });
});
// FUNCTION FOR ASSIGNING CLASSES FOR CONTROL
function assignwidth (resize) {
  if (resize > 990) {
    $("#overlay").addClass("Isoverlayed");
    $("#objs").removeClass("Isactive");
    $('[data-toggle="tooltip"]').tooltip();
    $("#video").attr("src","mp4/MTrailer1.mp4");
  } else {
    $("#objs").addClass("Isactive");
    $("#overlay").removeClass("Isoverlayed");
    $('[data-toggle="tooltip"]').tooltip('dispose');
    $("#video").attr("src"," ");
  }
}
