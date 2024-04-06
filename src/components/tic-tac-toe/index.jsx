import { useEffect, useState } from "react";
import "./styles.css";

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [isXTurn, setIsXTurn] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [status, setStatus] = useState("");

  function handleOnClick(getCurrentSquare) {
    if (squares[getCurrentSquare] || getWinner()) return;
    let cpySquares = [...squares];
    cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  }

  function restartGame() {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
  }

  function getWinner() {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPattern.length; i++) {
      const [a, b, c] = winningPattern[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
    }
    return null;
  }

  useEffect(() => {
    if (!getWinner() && squares.every((item) => item !== ""))
      setStatus("It's draw, please restart the game");
    else if (getWinner()) setStatus(`Winner is ${getWinner()}`);
    else {
      setStatus(`Next turn is ${isXTurn ? "X" : "O"}`);
    }
  }, [isXTurn, squares]);

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleOnClick(0)} />
        <Square value={squares[1]} onClick={() => handleOnClick(1)} />
        <Square value={squares[2]} onClick={() => handleOnClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleOnClick(3)} />
        <Square value={squares[4]} onClick={() => handleOnClick(4)} />
        <Square value={squares[5]} onClick={() => handleOnClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleOnClick(6)} />
        <Square value={squares[7]} onClick={() => handleOnClick(7)} />
        <Square value={squares[8]} onClick={() => handleOnClick(8)} />
      </div>
      {status && <h1>{status}</h1>}
      <button onClick={restartGame}>Restart</button>
    </div>
  );
}
