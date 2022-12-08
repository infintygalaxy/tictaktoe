import React, { useState } from "react";
import Square from "./Square";
const Board = () => {

  const [board,setBoard]=useState(Array(9).fill(null))              //usestate
  const [isNext,setisNext]=useState(false)


  const handleSquareClick = (postion) => {                                //handle square click function
setBoard((prev)=>{
  return prev.map((Square,postionInSquare)=>{
    if(postionInSquare===postion)
    return isNext?"x":"O";
    else
    return Square;
  })
})
setisNext((prev)=>!prev);

  };                             




  const renderSquare = (postion) => {                              //rendering square function
    return (
      <Square
        value={board[postion]}
        onClick={() => {
          handleSquareClick(postion);
        }}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
