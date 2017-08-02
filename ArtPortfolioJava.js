var images = ["Pictures/ArtPortfolio/swordgirl.jpg", "Pictures/ArtPortfolio/spring.jpg", "Pictures/ArtPortfolio/moon.png"];
var i = -1;

function photoRight() {
  if (i == 2 || i == 3) {
    i = -1;
  }
  document.getElementById("imagePortfolio").src = images[i + 1];

  i = i + 1;

}
function photoLeft() {

  if (i == 0 || i == -1) {
    i = 3;
  }
  document.getElementById("imagePortfolio").src = images[i - 1];
  i = i - 1;

}
