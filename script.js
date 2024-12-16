var jealousButton = document.getElementsByClassName("btn");
var wohooSound = document.getElementById("sound-wohoo");
var meSound = document.getElementById("sound-me");

var getSiblings = function (elem) {
  var siblings = [];
  var sibling = elem.parentNode.firstChild;
  for (; sibling; sibling = sibling.nextSibling) {
    if (sibling.nodeType !== 1 || sibling === elem) continue;
    siblings.push(sibling);
  }
  return siblings;
};

for (var i = 0; i < jealousButton.length; i++) {

  jealousButton[i].addEventListener("mouseover", function(event) { 
    wohooSound.play();  
    meSound.play();
    this.classList.add("yeay");

    var siblings = getSiblings(this);
    for (var i = 0; i < siblings.length; i++) {
      siblings[i].classList.add("pick-me");
    }
  }, false);


  jealousButton[i].addEventListener("mouseleave", function(event) {   
    wohooSound.pause();  
    wohooSound.currentTime = 0;
    meSound.pause();
    meSoundcurrentTime = 0;
    event.target.classList.remove("yeay");

    for (var i = 0; i < jealousButton.length; i++) {
      jealousButton[i].classList.remove("pick-me");
      jealousButton[i].classList.remove("yeay");
    }
  }, false);

}

//  JQUERY CODE
// $(".btn" ).mouseover(function() {
//   $("#sound-wohoo")[0].play();
//   $("#sound-me")[0].play();
//   $(this).addClass("yeay");
//  $(this).siblings().addClass("pick-me");
//   $(this).siblings().children( ".hand" ).css( "display", "block" );
// });

// $(".btn" ).mouseout(function() {
//   $("#sound-woohoo")[0].pause();
//   $("#sound-me")[0].pause();
//   $(this).removeClass("yeay");
//    $(".btn").removeClass("pick-me");
// });
