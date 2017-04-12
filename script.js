console.log("poop");


//getting body
var body = document.getElementsByTagName("body")[0];

// //appending tiles
// body.appendChild(tile);
// body.appendChild(tile2);



// ////STANDARD CHECKERS
// for(var i = 0; i<81; i++){
//   var tile = document.createElement("div")
//   tile.style.float = "left"
//   tile.style.paddingBottom = "11.1%"
//   tile.style.width = "11.1%";
//   if(i%2===0){
//     tile.style.backgroundColor="gray";
//     body.appendChild(tile);
//   } else {
//     tile.style.backgroundColor="orange";
//     body.appendChild(tile);
//   }
// }


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


// ////CHANGING COLORS
// for(var i = 0; i<81; i++){
//   var tile = document.createElement("div")
//   tile.style.float = "left"
//   tile.style.paddingBottom = "11.1%"
//   tile.style.width = "11.1%";
//   var color = getRandomColor()
//   var intervalID = scope.setInterval(getRandomColor, 2);
//   tile.style.backgroundColor=color;
//   body.appendChild(tile);
// }
// //getting random color
// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var fullColor = '#';
//     for (var i = 0; i < 6; i++ ) {
//         fullColor += letters[Math.floor(Math.random() * 16)];
//     }
//     return fullColor;
// }
