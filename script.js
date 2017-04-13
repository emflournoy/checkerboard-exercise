console.log("poop");


//getting body
var body = document.getElementsByTagName("body")[0];


////Gradient
function makeTiles(){
  body.innerHTML="";
  for(var i = 0; i<81; i++){
    var tile = document.createElement("div")
    tile.style.float = "left";
    tile.style.paddingBottom = "11.1%";
    tile.style.width = "11.1%";
    var color = getRandomColor();
    tile.style.backgroundColor= color;
    tile.style.opacity = '.5'
    body.style.background = "linear-gradient(20deg, yellow, blue)";
    body.appendChild(tile);
  }
}
makeTiles();
window.setInterval(makeTiles, 2000);

//getting random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var fullColor = '#';
    for (var i = 0; i < 6; i++ ) {
        fullColor += letters[Math.floor(Math.random() * 16)];
    }
    return fullColor;
}
