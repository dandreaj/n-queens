/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = [];
  var board = new Board({ n: n });
  var startRow = 0;

  var checkerFunction = function(board, row) {
    if (row === n) {
      return solution;
    }
    for (var c = 0; c < n; c++) {
      board.togglePiece(row, c);
      if (!board.hasAnyRooksConflicts()) {
        solution = board.rows();
        checkerFunction(board, row + 1);
      } else {
        board.togglePiece(row, c);
      }
    }
  };

  checkerFunction(board, startRow);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({ n: n });
  var startRow = 0;

  var checkerFunction = function(board, row) {
    if (row === n) {
      solutionCount++;
    } else {
        for (var c = 0; c < n; c++) {
          board.togglePiece(row, c);
          if (!board.hasAnyRooksConflicts()) {
            // solution = board.rows();
            checkerFunction(board, row + 1);
            board.togglePiece(row, c);
          } else {
            // checkerFunction(board,row +1);
            board.togglePiece(row, c);
          }
        }
      }
  };

  checkerFunction(board, startRow);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // var n = 3;
  var solution = [];
  var board = new Board({ n: n });
  var startRow = 0;
  var startCol = 0
  var sumOfN = 0;

  // if(n === 1){
  //   solution = [[1]];
  //   return solution;
  // }

  var checkerFunction = function(board, row, col) {
    for (var c = col; c < n; c++) {
      if (row === n) {
        return solution;
      }
      board.togglePiece(row, c);
      if (!board.hasAnyQueensConflicts()) {
        solution = board.rows();
        checkerFunction(board, row + 1, c)
      } else {
        board.togglePiece(row, c);
      }
    }
  };

  checkerFunction(board, startRow, startCol);
  // console.log("solution",solution);
  // for(var i = 0; i<solution.length;i++){
    // console.log('solution outside function:', solution);
  //   for(var j =0;j<solution[i].length;j++){
  //     sumOfN += solution[i][j];
  //   }
  // }

  // console.log('sumofN',sumOfN);

  // if(sumOfN !== n ) {
    // console.log('sumOfN:',sumOfN);
    // var newBoard = new Board({ n: n });
    // solution = [];
    // console.log(newBoard, startRow, startCol+1);
  //   checkerFunction(newBoard, startRow, startCol+1);
  // }



  // solution.reduce(function (acc, elem) {
  //   return (acc + elem).reduce(function (a, b) {
  //     return a + b;
  //   }, 0 );
  // }, 0);
  // console.log('solution: ', solution);

 console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({ n : n });
  var startRow = 0;

  var checkerFunction = function(board, row) {
    if (row === n) {
      solutionCount++;
    } else {
        for (var c = 0; c < n; c++) {
          board.togglePiece(row, c);
          if (!board.hasAnyQueensConflicts()) {
            // solution = board.rows();
            checkerFunction(board, row + 1);
            board.togglePiece(row, c);
          } else {
            // checkerFunction(board,row +1);
            board.togglePiece(row, c);
          }
        }
      }
  };

  checkerFunction(board, startRow);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
