import React from "react"
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Forms from "../Contexts";
import { useContext } from "react";
import { Context1 } from "../Contexts";

export default function Page1({ nextPage, prevPage}) {
  const {formArray, setFormArray} = useContext(Context1);
  const history = useHistory();
  const handlenext = () => {
    
      // history.push('/Page2');
      nextPage();
    
  }
  const handleprev = () => {
    // history.push('/');
    prevPage();
  }
    return(
        <div className="details">
      <div className="heading">
        <h2>Personal details</h2>
      </div>
      <div class="row">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="First name *"
            aria-label="First name"
           value={formArray['first_name']}
           onChange={(e)=> setFormArray({...formArray, 'first_name': e.target.value})}

          />
          <div className="icon-form">
          <i class="fas fa-envelope icon"></i>
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            aria-label="Email"
            value={formArray['email']}
            onChange={(e)=> setFormArray({...formArray, 'email': e.target.value})}
          />
          </div>
          <div className="icon-form">
          <i class="fab fa-linkedin-in"></i>
          <input
            type="text"
            class="form-control"
            placeholder="Linked In"
            aria-label="Linked In"
            value={formArray['linkedin']}
            onChange={(e)=> setFormArray({...formArray, 'linkedin': e.target.value})}
          />
          </div>
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Last name *"
            aria-label="Last name"
            value={formArray['last_name']}
            onChange={(e)=> setFormArray({...formArray, 'last_name': e.target.value})}
          />
          <div className="icon-form">
          <i class="fas fa-phone-alt"></i>
          <input
            type="number"
            class="form-control"
            placeholder="Phone-Number"
            aria-label="Phone-Number"
            value={formArray['phone_number']}
            onChange={(e)=> setFormArray({...formArray, 'phone_number': e.target.value})}
          />
          </div>
          <div className="icon-form">
          <i class="fab fa-github"></i>
          <input
            type="text"
            class="form-control"
            placeholder="Github"
            aria-label="Github"
            value={formArray['github']}
            onChange={(e)=> setFormArray({...formArray, 'github': e.target.value})}
          />
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
    )
}