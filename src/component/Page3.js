
import React from "react";

import { useState } from "react";
import { useHistory } from "react-router-dom";

  export default function Page3({prevPage, nextPage, handleChange, values}) {
    
    const [formArrays, setFormArrays] = useState([])

    const history = useHistory();

   
  
 
  const handlenext = () => {
    nextPage();
    // history.push('/Page4');
  }
  const handleprev = () => {
    prevPage();
    // history.push('/Page2');
  }
 
  function handleClick(){
    
    const inputstate = {
      title: "",
      projectLink: "",
      description: "",
      
    }
    

    setFormArrays(prevState=>[...prevState,inputstate])
    
  }
 
  return (
    <div className="details">
      <div className="heading">
        <h2>Project-Details</h2>
      </div>
      <div className="sub-division">
        {
          formArrays.map((item, index) => {
            return(
          
            <div className="inner-container">
              <h2>Project {index + 1}</h2>
            <div class="mb-3" >
          <input 
            type="text"
            class="form-control"
            id="title"
            placeholder="Title *"
            onChange={handleChange("title")}
            defaultValue = {values.title}  
                 
          />
        </div>
            <div class="mb-3" >
          <input 
            type="text"
            class="form-control"
            id="project-link"
            placeholder="Project link *"
            onChange={handleChange("projectLink")}
            defaultValue = {values.projectLink}
          />
        </div>
            <div class="mb-3" >
          <input 
            type="text"
            class="form-control"
            id="Description"
            placeholder="Description *"
            onChange={handleChange("description1")}
            defaultValue = {values.description1}
          />
        </div>
        <hr></hr>
            </div>
            )
            
          
        })}
           
           
            <hr/>
            <button type="submit" className="add" onClick={handleClick}>+ Add Project</button>
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
