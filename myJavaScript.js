var images = ["Pictures/lookingout.jpg", "Pictures/puddle.jpg", "Pictures/smile.jpg"];
var i = -1;

AOS.init({
  duration: 1200,
})

/*window.onload = function imageChange() {
  setInterval(
  function() {
    var newBackground = "url(" + images[i + 1] + ")";
    document.getElementById("background").style.backgroundImage = newBackground;
    i = i + 1;
    if (i == 2) {
      i = -1;
    }
  }, 10000);
}
