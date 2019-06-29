var gameBoard = document.getElementById('game-board');
var row0 = gameBoard.querySelectorAll("[data-row='0']");
var row1 = gameBoard.querySelectorAll("[data-row='1']");
var row2 = gameBoard.querySelectorAll("[data-row='2']");
var row3 = gameBoard.querySelectorAll("[data-row='3']");
var row4 = gameBoard.querySelectorAll("[data-row='4']");
var row5 = gameBoard.querySelectorAll("[data-row='5']");
var row6 = gameBoard.querySelectorAll("[data-row='6']");
var row7 = gameBoard.querySelectorAll("[data-row='7']");
console.log('---file is loading------');
alert('this is alert');
/**
 * ============================
 * Game initialization section
 * ============================
 * */ 
function initializeGame() {
  console.log('-------- game is initializing---------');
  console.log('-----------row7', row7);
  // set checker with appropriate data
  var cell = row7.querySelector("[data-col=7]");
  createBlackChecker($cell);
}

// top part
function initializeBlackChecker() {
  
}

// lower part
function initializeRedChecker() {
  
}

function clearCheck(row, column) {
  
}

/** 
 * =================================
 * utility function section
 * =================================
*/

function createNewCheck($cell, color) {
  color = color || 'black-checker'
}

function createBlackChecker($cell) {
  var node = document.createElement('<div class="checker black-checker"></div>');
  $cell.appendChild(node);
}

function setDataSet($obj, key, value) {
  $obj.dataset[key] = value;
}

function checker(piece,color,square) {
	this.id = piece;
	this.color = color;
	this.king = false;
	this.ocupied_square = square;
	this.alive = true;
	this.attack = false;
	if(square%8){
		this.coordX= square%8;
		this.coordY = Math.floor(square/8) + 1 ;
	}
	else{
		this.coordX = 8;
		this.coordY = square/8 ;
	}
	this.id.onclick = function  () {
		showMoves(piece);	
	}
}

/**
 * ============== game play section ============
 * */ 

initializeGame();