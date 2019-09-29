//This code creates a webpage that allows users to make a grid of their chosen size
//and fill in the grid cells with a chosen color.

//Defines variables
var sizePicker = document.querySelector("#sizePicker");
var h = document.querySelector('#inputHeight').value;
var w = document.querySelector('#inputWidth').value;
var canvas = document.querySelector('#pixelCanvas');
var color = document.querySelector('#colorPicker');

//Adds an event listener for the click on the submit button and stores their
//chosen height and width for the grid as variables
document.getElementById("submitButton").addEventListener('click', function(event) {
  event.preventDefault();
  document.body.removeChild(document.getElementById("grid"));
  var h = document.getElementById('inputHeight').value;
  var w = document.getElementById('inputWidth').value;
  makeGrid();
})

//Cell color fill function
function fillCell(e) {
	e.target.style.backgroundColor = color.value;
};

//Grid creation function
function makeGrid(h, w) {
  var h = document.getElementById('inputHeight').value;
  var w = document.getElementById('inputWidth').value;
  var table = document.createElement('table');
  table.id="grid";
  var row;
  var cell; 
  //Loops for creating the rows and columns of the grid
  for (var x = 0; x < h; x++) {
    row = table.insertRow();
    for (var y = 0; y < w; y++) {
      cell = row.insertCell();
      cell.addEventListener('mousedown', fillCell);
    }
  }
  //Adds the grid to the body
  document.body.appendChild(table);
}

//Grid reset function
function clearTable() {
	while(table.rows.length > 0) {
	canvas.firstElementChild.remove();
}
}

makeGrid();
