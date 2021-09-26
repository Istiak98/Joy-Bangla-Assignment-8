import React, { useEffect, useState } from 'react';
import Board from '../Board/Board';
import Leader from '../Leader/Leader';
import './Team.css'
const Team = () => {
    const [leaders,setLeaders]=useState([])
  
     //for add member on board
     const[board,setBoard]=useState([])
     const handleAddLeader=(leader)=>{

        const newBoard=[ ...board  , leader ]
        console.log(newBoard)
        setBoard(newBoard)

    }
    useEffect(()=>{
        fetch('/leaders.json')
        .then(res=>res.json())
        .then(data=>setLeaders(data))
    },[])
    return (
        <div>
        <p className="text-center fs-1 p-3 mb-2 bg-dark opacity-75 text-white">WELCOME TO MUJIB-100 YEAR  <br /><span className="fs-3 text-warning fw-700">JOY BANGLA</span> <br />
        <span className="fs-3 text-white">Total Budegts: 500 Billion</span></p>
        <div className="row">
            <div className="col-md-9">
               {/* Load Data Card  */}
               <div className="row">
                   {
                      leaders.map(leader=>  
                        <Leader
                        key={leader.key}
                        leader={leader} 
                        handleAddLeader={handleAddLeader}>  
                        </Leader>)    
                   }
               </div>
               
            </div>
            <div className="col-md-3 bg-dark">
                {/* There will be show data on click */}
               
                <Board 
               
                board={board}
                ></Board>
            </div>
        </div>

        </div>
    );
};

export default Team;