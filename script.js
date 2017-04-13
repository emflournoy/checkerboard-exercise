console.log("poop");


//getting body
var body = document.getElementsByTagName("body")[0];


////STANDARD CHECKERS
for(var i = 0; i<81; i++){
  var tile = document.createElement("div")
  tile.style.float = "left"
  tile.style.paddingBottom = "11.1%"
  tile.style.width = "11.1%";
  var color = getRandomColor()
  tile.style.backgroundColor=color;
  body.appendChild(tile);
}

//getting random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var fullColor = '#';
    for (var i = 0; i < 6; i++ ) {
        fullColor += letters[Math.floor(Math.random() * 16)];
    }
    return fullColor;
}
