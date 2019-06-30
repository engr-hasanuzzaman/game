
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
	 * utility function section
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

	function attachCliceEvent($obj) {
		$obj.on('click', function(e){
			var $checker = $(e.target);
			var $cParent = $checker.parent();
			$checker.toggleClass('selected');
			// alert('you have clicked' + $cParent.data('row') + $cParent.data('col'));
		})
	}

	/**
	 * ============== game play section ============
	 * */ 

	initializeGame();
	console.log("----------loading js file");
});