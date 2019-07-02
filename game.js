
$(function() {
	var $gameBoard = $('#game-board');
	var currentTurn = 'black'; // black or red
	var $selectedChecker; 
	var $blackChecker = $('<div class="checker black-checker js-black-checker"></div>');
	var $redChecker = $('<div class="checker red-checker js-red-checker"></div>');
	// initial board setting, 1 means red checker, 2 means black checker
	var gameBoardArray = [
		[1, -5, 1, -5, 1, 0, 1, -5, 1],
		[0, 1, -5, 1, 0, 1, -5, 1, -5],
		[1, -5, 1, -5, 1, -5, 1, -5, 1],
		[-5, 0, 0, 0, -5, 0, -5, 0, -5],
		[0, -5, 0, -5, 0, -5, 0, -5, 0],
		[0, 2, -5, 2, -5, 2, -5, 2, 0],
		[2, -5, 2, -5, 2, -5, 2, -5, 2],
		[-5, 2, -5, 2, -5, 2, -5, 2, -5]
	];

	/**==============================================================
	 * Immediately Invocking function for binding event on each cell
	 * 1. click on path cell/empty cell
	 * ============================================================== */
	(function() {
		$(document).on('click', '.js-cell', function(e) {
			console.log('---clicked on cell');
			var $cell = $(e.target);
			var rowCol = getCheckerRowColumn($selectedChecker);

			if($cell.hasClass('path')){
				makeMove($selectedChecker, $cell);
				gameBoardArray[rowCol[0], rowCol[1]] = 0;
			}

			resetAllChecker();
			resetPath();
		});
	}());

	var row0 = $("[data-row='0']");
	var row1 = $("[data-row='1']");
	var row2 = $("[data-row='2']");
	var row3 = $("[data-row='3']");
	var row4 = $("[data-row='4']");
	var row5 = $("[data-row='5']");
	var row6 = $("[data-row='6']");
	var row7 = $("[data-row='7']");
	
	// alert('this is alert');
	/**
	 * ============================
	 * Game initialization section
	 * ============================
	 * */ 
	function initializeGame() {
		$('#game-board').find('.js-row').each(function(i, r) {
			$(r).find('.js-cell').each(function(j, col) {
				var $col = $(col);
				var  $elm;
				if(gameBoardArray[i][j] == 1){
					$elm = createRedChecker(i, j);
					$col.append($elm);
				}else if(gameBoardArray[i][j] == 2){
					$elm = createBlackChecker(i, j);
					$col.append($elm);
				}
				
				if($elm){
					gameBoardArray[i][j] = $elm;
				}
			});
		});
	}

	/** 
	 * =================================
	 * utility functions section
	 * =================================
	*/

	// create black check and attache all the events
	function createBlackChecker(row, col) {
		var $elm = $blackChecker.clone();
		$elm.data('row', row);
		$elm.data('col', col);
		attachCliceEvent($elm);
		return $elm;
	}

	// create red check and attache all the events
	function createRedChecker(row, col) {
		var $elm = $($redChecker.clone());
		// $elm.dataset.row = 'row';
		$elm.data('row', row);
		$elm.data('col', col);
		attachCliceEvent($elm);
		return $elm;
	}

	// select checker
	function attachCliceEvent($obj) {
		$obj.on('click', function(e){
			e.stopPropagation(); // do not move this event to cell
			
			if(isAnySelectedChecker()){
				resetPath();
				return resetAllChecker();
			}

			var $checker = $(e.target);
			var $cParent = $checker.parent();
			// check is there any empty path?
			var paths = getCheckerPath($checker);
			
			// if none of the value is cell 
			if(!paths[0] && !paths[1]){
				return false;
			}

			$checker.toggleClass('selected');
			showCheckerMove(paths);
			$selectedChecker = $checker; 
		})
	}
	
	// return array of moveable cells object
	function getCheckerPath($checker) {
		var rowColumn = getCheckerRowColumn($checker);
    var row = rowColumn[0];
		var col = rowColumn[1];
		var paths = [];

		if(isBlackChecker($checker)){
			// black checker path is 7 to 0
			// first cell will be row - 1, col - 1, row - 1, col + 1
			var $lCell = $("[data-row='" + (row - 1) + "']" + "[data-col='" + (col - 1) + "']");
			var $rCell = $("[data-row='" + (row - 1) + "']" + "[data-col='" + (col + 1) + "']");
			
			if(gameBoardArray[row - 1][col - 1] == 0){
				paths[0] = $lCell
			}
			
			if(gameBoardArray[row - 1][col - 1] == 0){
				paths[1] = $rCell
			}
		}else{
			// red checker path is 0 to 7
			// first cell will be row + 1, col + 1, row - 1, col + 1
			var $lCell = $("[data-row='" + (row + 1) + "']" + "[data-col='" + (col - 1) + "']");
			var $rCell = $("[data-row='" + (row + 1) + "']" + "[data-col='" + (col + 1) + "']");
			
			if(gameBoardArray[row + 1][col - 1] == 0){
				paths[0] = $lCell
			}
			
			if(gameBoardArray[row + 1][col - 1] == 0){
				paths[1] = $rCell
			}
		}
		
		return paths;
	}

	// is there any selected checker?
	function isAnySelectedChecker() {
		if($('.checker.selected').length >= 1){
			return true;
		}else{
			return false;
		}
	}

	// set path class to cell 
	function showCheckerMove(cells){
		if(cells[0]){
			cells[0].addClass('path');
		}

		if(cells[1]){
			cells[1].addClass('path');
		}
	}

	function getCheckerType($checker){
		if($checker.hasClass('js-black-checker')){
			return 'black';
		}else{
			return 'red';
		}
	}

	function isBlackChecker($checker){
		return getCheckerType($checker) == 'black'
	}

	// return array, first is row then column
	function getCheckerRowColumn($checker){
		var $cParent = $checker.parent();
		var row = $cParent.data('row');
		var col = $cParent.data('col');
		
		return [row, col];
	}
	/**==============================
	 * Helper fucntion for resetting 
	 *================================  */
	function resetPath() {
		$('.cell.path').removeClass('path');
	}

	function resetAllChecker() {
		$('.checker').removeClass('selected');
	} 
	
	// move checker to new cell
	function makeMove($checker, $newCell) {
		$checker.detach().appendTo($newCell);
	}
	/**
	 * ============== game play section ============
	 * */ 

	initializeGame();
	console.log("----------loading js file");
});