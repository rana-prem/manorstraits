





$(document).ready(function(){
  //Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  //pin the LOGO
  var pinTheLogo = new ScrollMagic.Scene({
    triggerElement:".logo-content",
    triggerHook:0
  })
  .setPin(".logo-content")
  .addTo(controller);

  //build a scene
  var ourScene = new ScrollMagic.Scene({
      triggerElement : "#logo-left",
      duration:"100",
      triggerHook:0
  })
  var ourScene = new ScrollMagic.Scene({
      triggerElement : "#logo-right",
      duration:"100",
      triggerHook:0
  })
  .setClassToggle("#logo-left","logo-move") //add class to logo-left
  .setClassToggle("#logo-right","logo-move-1")

  .addIndicators()
  .addTo(controller);

});
