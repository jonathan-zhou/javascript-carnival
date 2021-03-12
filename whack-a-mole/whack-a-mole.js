  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
//creating an array to store each cell
var myArray = [];

//storing the table element
var myTable = document.getElementById("moleTable");

//for loops to push each cell into my array
//first loop to iterate over the row 5 times (myTable.rows.length = 5)
for (var i = 0; i < myTable.rows.length; i++) {
//second loop to iterate over the column 5 times (myTable.rows.cells.length = 5 )
  for (var j = 0; j < myTable.rows[i].cells.length; j++) {
//push each cell to my array
    myArray.push(myTable.rows[i].cells[j]);
  } 
} 

/**
 * i = 0; 
 * 0 < 5;
 * 
 * j = 0;
 * 0 < 5;
 * myArray[0] = myTable.rows[0].cells[0];
 * j = 1;
 * 
 * j = 1;
 * 1 < 5;
 * myArray[1] = myTable.rows[0].cells[1];
 * j = 2
 * 
 * j = 2;
 * 2 < 5;
 * myArray[2] = myTable.rows[0].cells[2];
 * j = 3;
 * 
 * j = 3;
 * 3 < 5;
 * myArray[3] = myTable.rows[0].cells[3];
 * j = 4;
 * 
 * j = 4;
 * 4 < 5;
 * myArray[4] = myTable.rows[0].cells[4];
 * j = 5;
 * stops then goes back to the 1st loop, because row 0 is done we go next to row 1;
 * 
 * i = 1;
 * 1 < 5;
 * 
 * j = 0;
 * 0 < 5;
 * myArray[5] = myTable.rows[1].cells[0];
 * j = 1;
 * 
 * j = 1;
 * 1 < 5;
 * myArray[6] = myTable.rows[1].cells[1];
 * j = 2
 * 
 * j = 2;
 * 2 < 5;
 * myArray[7] = myTable.rows[1].cells[2];
 * j = 3;
 * 
 * j = 3;
 * 3 < 5;
 * myArray[8] = myTable.rows[1].cells[3];
 * 
 */



// random number generator
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//getting a random number and cell
var randomNum = getRandomInt(24);
var randomCell = myArray[randomNum];

//function to add the mole by class and the whack mole function to a cell
function addMole(cell) {

  //created a class mole in CSS, which has the mole image as background
  //using element.setAttribute to add the class and onClick function
  cell.setAttribute("class", "mole");
  cell.setAttribute("onClick", "whackMole()");
}

//calling the addMole function
addMole(randomCell);

//whack mole function will play the sound and remove the mole from every cell
function whackMole () {
//play audio
  var audio = new Audio('whack-audio.wav');
  audio.play();

//same loops as above 
  for (var i = 0; i < myTable.rows.length; i++) {
    for (var j = 0; j < myTable.rows[i].cells.length; j++) {

//each cell is entered as an argument to clearMole which sets the class/onClick attributes as "" blank
      clearMole(myTable.rows[i].cells[j]);
    } 
  }

//generate new number and cell to add new mole to
  var newRandomNum = getRandomInt(24);
  var newRandomCell = myArray[newRandomNum];
  addMole(newRandomCell);
}

//each cell will reset its class/onClick attributes
function clearMole(cell) {
  //using element.setAttribute to blank out the class and onClick function
  cell.setAttribute("class", "");
  cell.setAttribute("onClick", "");
}