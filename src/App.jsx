import { useState } from 'react'
import './style.css'

export default function App() {
  return (
    <Board>
    </Board>
  )
}

function Square({value , onClickSquare}) {
  return (<button className="square" onClick={onClickSquare}>{value}</button>);
}
function calWinner(squares){
  const wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //-----
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //-----
    [0,4,8],
    [2,4,6]
  ]
    for(var i = 0 ;i  < wins.length ; ++i){
      const [a , b , c] = wins[i];
      if(squares[a] && squares[a] == squares[b] && squares[a] == squares[c])
        return true;
    }
    return false;
}
function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null)); 
  
  function handleClick(i) 
  {
    const nextSq = squares.slice()
    if(squares[i] || calWinner(nextSq)) return
    nextSq[i] = xIsNext ? "X" : "O"
    setXIsNext(!xIsNext)
    setSquares(nextSq)
  }


  let current = xIsNext ? "O" : "X";
  let next = xIsNext ? "X" : "O";
  let status = calWinner(squares) ? "winner is " + current : "next is " + next

  return (
    <div className ="parent">
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value = {squares[0]} onClickSquare={() =>handleClick(0)} />
        <Square value = {squares[1]} onClickSquare={() =>handleClick(1)} />
        <Square value = {squares[2]} onClickSquare={() =>handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value = {squares[3]} onClickSquare={() =>handleClick(3)} />
        <Square value = {squares[4]} onClickSquare={() =>handleClick(4)} />
        <Square value = {squares[5]} onClickSquare={() =>handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value = {squares[6]} onClickSquare={() =>handleClick(6)} />
        <Square value = {squares[7]} onClickSquare={() =>handleClick(7)} />
        <Square value = {squares[8]} onClickSquare={() =>handleClick(8)} />
      </div>
    </div>
  );
}