console.log("poop");


//getting body
var body = document.getElementsByTagName("body")[0];

////STANDARD CHECKERS
for(var i = 0; i<81; i++){
  var tile = document.createElement("div")
  tile.style.float = "left"
  tile.style.paddingBottom = "11.1%"
  tile.style.width = "11.1%";
  if(i%2===0){
    tile.style.backgroundColor="gray";
    body.appendChild(tile);
  } else {
    tile.style.backgroundColor="orange";
    body.appendChild(tile);
  }
}
