
$(function() {
	console.log("this si asdfasdf");
	var $gameBoard = $('#game-board');
	var $blackChecker = $('<div class="checker black-checker js-black-checker"></div>');
	var $redChecker = $('<div class="checker red-checker js-red-checker"></div>');
	// initial board setting, 1 means red checker, 2 means black checker
	var gameBoardArray = [
		[1, 0, 1, 0, 1, 0, 1, 0, 1],
		[0, 1, 0, 1, 0, 1, 0, 1, 0],
		[1, 0, 1, 0, 1, 0, 1, 0, 1],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 2, 0, 2, 0, 2, 0, 2, 0],
		[2, 0, 2, 0, 2, 0, 2, 0, 2],
		[0, 2, 0, 2, 0, 2, 0, 2, 0]
];
	var row0 = $("[data-row='0']");
	var row1 = $("[data-row='1']");
	var row2 = $("[data-row='2']");
	var row3 = $("[data-row='3']");
	var row4 = $("[data-row='4']");
	var row5 = $("[data-row='5']");
	var row6 = $("[data-row='6']");
	var row7 = $("[data-row='7']");
	
	$('#game-board').find('.js-row').each(function(i, r) {
		$(r).find('.js-cell').each(function(j, col) {
			var $col = $(col);
			var  $elm;
			if(gameBoardArray[i][j] == 1){
				$elm = $redChecker.clone();
				$col.append($elm);
				// $col.text('red');
			}else if(gameBoardArray[i][j] == 2){
				$elm = $blackChecker.clone();
				$col.append($elm);
				// $col.text('black');
			}
			
			if($elm){
				gameBoardArray[i][j] = $elm;
			}
		});
	})

	// console.log('---file is loading------');
	// // alert('this is alert');
	// /**
	//  * ============================
	//  * Game initialization section
	//  * ============================
	//  * */ 
	// function initializeGame() {
	// 	console.log('-------- game is initializing---------');
	// 	console.log('-----------row7', row7);
	// 	// set checker with appropriate data
	
	// 	createBlackChecker($cell);
	// }

	// // top part
	// function initializeBlackChecker() {
		
	// }

	// // lower part
	// function initializeRedChecker() {
		
	// }

	// function clearCheck(row, column) {
		
	// }

	// /** 
	//  * =================================
	//  * utility function section
	//  * =================================
	// */

	// function createNewCheck($cell, color) {
	// 	color = color || 'black-checker'
	// }

	// function createBlackChecker($cell) {
	// 	var node = document.createElement('<div class="checker black-checker"></div>');
	// 	$cell.appendChild(node);
	// }

	// function setDataSet($obj, key, value) {
	// 	$obj.dataset[key] = value;
	// }

	// function checker(piece,color,square) {
	// 	this.id = piece;
	// 	this.color = color;
	// 	this.king = false;
	// 	this.ocupied_square = square;
	// 	this.alive = true;
	// 	this.attack = false;
	// 	if(square%8){
	// 		this.coordX= square%8;
	// 		this.coordY = Math.floor(square/8) + 1 ;
	// 	}
	// 	else{
	// 		this.coordX = 8;
	// 		this.coordY = square/8 ;
	// 	}
	// 	this.id.onclick = function  () {
	// 		showMoves(piece);	
	// 	}
	// }

	// /**
	//  * ============== game play section ============
	//  * */ 

	// initializeGame();
	// console.log("----------loading js file");
});