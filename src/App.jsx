import { useState } from "react";  //To “remember” things, components use state

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


export default function Board() {
  /* "defines" function -> Board, "export" -> makes  function accessible outside of this file "default -> tells other files using your code that this main function of your file"*/
  const [squares, setSquares] = useState(Array(9).fill(null)); /*creates an array with nine elements and sets each of them to null*/

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  }

  return (
    <>
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
