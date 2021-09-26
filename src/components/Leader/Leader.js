import React from 'react';
import './Leader.css'
const Leader = (props) => {
    const{name,image,age,team,slary,region,hobby}=props.leader
    // console.log(props.leader)
    return (
<div className="col-md-4 ">
<div className="card mb-3 ms-5 me-3" style={{"max-width": "540px"}}>
  <div className="row g-0">
    <div className="col-md-5 image">
      <img src={image} className="img-fluid rounded ms-2 mt-2 img" alt="..."/>
    </div>
    <div className="col-md-7">
      <div className="card-body">
        <h5 className="card-title"><span className="text-danger">{name}</span></h5>
        <p className="card-text"><small><span className="fw-bold">Age:</span> {age}</small></p>
        <p className="card-text"><small><span className="fw-bold">Region:</span> {region}</small></p>
        <p className="card-text"><small><span className="fw-bold">Invitation Fee:</span> $ {slary}</small></p>
        <p className="card-text"><small><span className="fw-bold">Team:</span> {team}</small></p>
        <p className="card-text"><small><span className="fw-bold">Hobby:</span> {hobby}</small></p>
        <button type="button" onClick={()=>props.handleAddLeader(props.leader)} className="btn btn-dark align-left far fa-circle">  Add to Board</button>      
      </div>
      
    </div>
    
  </div>
</div>
</div>
    );
};

export default Leader;