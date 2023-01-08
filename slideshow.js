window.onload = initBannerLink;
var theHero = 0;
var heroURL = new Array("google.com","aol.com","newgrounds.com", "youtube.com", "gocomics.com", "ebay.com");
var heroImages = new 
Array("superhero1.png","superhero2.png","superhero3.png", "superhero4.png", "superhero5.png", "superhero6.png");
function initBannerLink() {
if (document.getElementById("heroBanner").parentNode.tagName == "A") 
{
document.getElementById("heroBanner").parentNode.onclick = 
newLocation;
}
rotate();
}
function newLocation() {
document.location.href = "http://www." + heroURL[theHero];
return false;
}
function rotate() {
theHero++;
if (theHero == heroImages.length) {
theHero = 0;
}
document.getElementById("adBanner").src = heroImages[theHero];
setTimeout(rotate, 3 * 1000);
}