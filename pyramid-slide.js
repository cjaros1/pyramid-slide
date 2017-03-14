

var heightElem = document.getElementById("height");
var symbolElem= document.getElementById("symbol");

symbolElem.onchange=function(){
  symbol=symbolElem.value;
  height=heightElem.value;

  drawPyramid(height,symbol);

}


// set a handler function for the form's submission event
heightElem.oninput = function() {
  symbol=symbolElem.value;

    heightStr = heightElem.value;

    document.getElementById("slider-value").innerHTML=heightStr;

    // convert the string to an int
    height = parseInt(heightStr);




    // draw pyramid with the specified height

    drawPyramid(height,symbol);
}







/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height,symbol) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += symbol;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
