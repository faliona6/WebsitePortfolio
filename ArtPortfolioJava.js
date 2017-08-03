var images =
["Pictures/ArtPortfolio/swordgirl.jpg",
"Pictures/ArtPortfolio/moon.png",
"Pictures/ArtPortfolio/theirEyes1.jpg",
"Pictures/ArtPortfolio/theirEyes2.jpg",
"Pictures/ArtPortfolio/charasheet_alba.jpg",
"Pictures/ArtPortfolio/Alba_SpriteSheet.png",
"Pictures/ArtPortfolio/charasheet_player.jpg",
"Pictures/ArtPortfolio/Player_SpriteSheet.png",
"Pictures/ArtPortfolio/gallade.jpg",
"Pictures/ArtPortfolio/meganium.jpg",
"Pictures/ArtPortfolio/scenery.jpg",
"Pictures/ArtPortfolio/nina.jpg",
"Pictures/ArtPortfolio/2girls.jpg",
"Pictures/ArtPortfolio/hikari.jpg",
"Pictures/ArtPortfolio/spring.jpg",
"Pictures/ArtPortfolio/BlaWhi.jpg"
];
var i = -1;
var numImages = images.length;

window.onload = function imageStart() {
  document.getElementById("imagePortfolio").src = images[i + 1];
  i = i + 1;
}
function photoRight() {
  if (i == numImages - 1 || i == numImages) {
    i = -1;
  }
  document.getElementById("imagePortfolio").src = images[i + 1];

  i = i + 1;

}
function photoLeft() {

  if (i == 0 || i == -1) {
    i = numImages;
  }
  document.getElementById("imagePortfolio").src = images[i - 1];
  i = i - 1;

}
