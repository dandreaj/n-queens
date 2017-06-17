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


//Time Complexity: O(n^3)
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

//Time Complexity: O(n^3)
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
            checkerFunction(board, row + 1);
            board.togglePiece(row, c);
          } else {
            board.togglePiece(row, c);
          }
        }
      }
  };

  checkerFunction(board, startRow);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

//Time Complexity: O(n^4) (quadratic)
// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = [];
  var board = new Board({ n: n });
  var startRow = 0;
  var queenCounter = 0;

  var checkerFunction = function(board, row) {
    if (row === n) {
        return solution;
    } else {
      for (var c = 0; c < n; c++) {
        board.togglePiece(row, c);
        if (!board.hasAnyQueensConflicts()) {
          solution = board.rows();
          var solutionWithNQueens = checkerFunction(board, row + 1); //will return undefined if there is not a valid solution
          if(solutionWithNQueens){
            return solution; //gets us out of the function
          };
          board.togglePiece(row, c);
        } else {
          board.togglePiece(row, c);
        }
      }
    };
  }

  checkerFunction(board, startRow);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

//Time Complexity: O(n^4) (quadratic)
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
            checkerFunction(board, row + 1);
            board.togglePiece(row, c);
          } else {
            board.togglePiece(row, c);
          }
        }
      }
  };

  checkerFunction(board, startRow);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
