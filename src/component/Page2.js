import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { Context1 } from "../Contexts";

export default function Page2({prevPage, nextPage}) {
  const {formArray,setFormArray} = useContext(Context1)
 
  const history = useHistory();
  const handlenext = () => {
   
      // history.push('/Page3');
      nextPage();
    
  }
  const handleprev = () => {
    // history.push('/Page1');
    prevPage();
  }
  return (
    <div className="details">
        <div className="heading">
        <h2>Educational-Details</h2>
      </div>
      <div class="row">
        <div class="col">
          <div className="icon-form">
          <i class="fas fa-graduation-cap"></i>
          <input
            type="text"
            class="form-control"
            placeholder="College/University *"
            aria-label="College/University *"
            value = {formArray['college']}
            onChange={(e)=> setFormArray({...formArray, 'college': e.target.value})}
          />
          </div>
        </div>
        <div class="col">
        <div className="dates">
        <input type="date" id="date" value={formArray['date1']} onChange={(e)=> setFormArray({...formArray,'date1' : e.target.value})} />
        <input type="date" id="date" value={formArray['date2']} onChange={(e)=> setFormArray({...formArray,'date2' : e.target.value})}/>
        </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Qualification *"
            aria-label="Qualification"
            value={formArray['qualification']} onChange={(e)=> setFormArray({...formArray,'qualification' : e.target.value})}
          />
        </div>
        <div class="col">
        <div className="description">
        {/* <textarea placeholder="Description" ></textarea> */}
        </div>
        </div>
        </div>
        <hr className="divider"></hr>
        <div class="row">
        <div class="col">
          <div className="icon-form">
          <i class="fas fa-graduation-cap"></i>
          <input
            type="text"
            class="form-control"
            placeholder="School "
            aria-label="School *"
            value={formArray['school']} onChange={(e)=> setFormArray({...formArray,'school' : e.target.value})}
          />
          </div>
        </div>
        <div class="col">
        <div className="dates">
        <input type="date" id="date" value={formArray['date3']} onChange={(e)=> setFormArray({...formArray,'date3' : e.target.value})} name="date3"/>
        <input type="date" id="date" value={formArray['date4']} onChange={(e)=> setFormArray({...formArray,'date4' : e.target.value})} name="date4"/>
        </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Qualification *"
            aria-label="Qualification"
            value={formArray['qualification1']} onChange={(e)=> setFormArray({...formArray,'qualification1' : e.target.value})}
          />
        </div>
        <div class="col">
        <div className="description">
        {/* <textarea placeholder="Description" ></textarea> */}
        </div>
        </div>
        </div>
        <div className="container d-flex justify-content-between align-items-center">
      <button className="btn btn-primary" onClick={handleprev}>Previous</button>
     <button className="btn btn-primary mx-5" onClick={handlenext}>Next</button>
     </div>
     <br></br>
     <br></br>
    </div>
  );
}
