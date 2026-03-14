import { useState } from "react";  //To “remember” things, components use state
import { resumeToPipeableStream } from "react-dom/server";

function Square({ value, onSquareClick }){ /* indicates the Square component can be passed a prop called value */

  return (
  <button
   className="square text-blue-900"
   onClick={onSquareClick}
   >
    {value}
    </button>

  );
}

function Board() {
  /* "defines" function -> Board, "export" -> makes  function accessible outside of this file "default -> tells other files using your code that this main function of your file"*/
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null)); /*creates an array with nine elements and sets each of them to null*/

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    }
    else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner : " + winner;
  }
  else {
    status = "Next Player : " + (xIsNext ? "X" : "O");
  }

  function calculateWinner() {
    const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if(squares[a] && squares[a] == squares[b] && squares[b] == squares[c]){
        return squares[a];
      }
    }
    return null;
  }

  return (
    <>
    <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [xIsNext, stateXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)])
  const currentSquare = history[history.length - 1];

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <ol></ol>
      </div>
    </div>
  )
}