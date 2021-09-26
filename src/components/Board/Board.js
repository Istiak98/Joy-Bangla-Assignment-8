import React from "react";
// import Leader from "../Leader/Leader";
import './Board.css'

// import Leader from '../Leader/Leader';
const Board = (props) => {
  const { board } = props || {};

  const totalReducer = (prevDigit, currentDigit) =>
    prevDigit + currentDigit.slary;

  const totalFee = board.reduce(totalReducer, 0).toFixed(1);

  return (
    <div>
      <h3 className="text-danger">BOARD MEMBERS:</h3>
      <h3 className="text-white">
      <i className="fas fa-user-tie text-white"></i> {board.length}
      </h3>
      <h4 className="text-white">Total Fee: $ {totalFee}</h4>

      <h4 className="text-warning">Invited Board Members:</h4>
      <ul>
        {
            // Board Mmeber Details
          // board.map(leader=> <li className="text-white "> {
          //     leader.name}</li>)
          board.map((leader)=>(
           
            <div className="card mb-3 board-img" style={{"width": "10rem" }}>
            <img src={leader.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-danger">{leader.name}</h5>
              <h6 className="card-title">Team: {leader.team}</h6>
            </div>
          </div>
          ))
        }
      </ul>
    </div>
  );
};

export default Board;
