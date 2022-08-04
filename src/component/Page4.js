import React from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { Context1 } from "../Contexts";
export default function Page4({prevPage, handleChange,handlenext}) {
  const history = useHistory();
  const handleprev = () => {
    prevPage();
    // history.push("/Page3");
  }
  const { submitData } = useContext(Context1);
  const [experience,setExperience] = React.useState([]);
  const addmore = () => {
    const inputstate = {
     institute : "",
     position : "",
     duration : "",
      description1 : "",
    }
    setExperience(prevState=>[...prevState,inputstate])
  }
  return (
    <div className="details">
      <div className="heading">
        <h2>Experience details</h2>
      </div>
      <div className="sub-division">
        {experience.map((item,index)=>{
          return (
            <div className="inner-container-4">
              <h3>Experience {index + 1}</h3>
            <div class="row g-3">
              <div class="col-sm">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Institute/Organisation *"
                  aria-label="Institute/Organisation *"
                  onChange={handleChange("institute")}
                  name = "institute"

                />
              </div>
              <div class="col-sm">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Position/Role"
                  aria-label="Position/Role"
                  onChange={handleChange("position")}
                  name = "position"
                />
              </div>
              <div class="col-sm">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Duration"
                  aria-label="Duration"
                  onChange={handleChange("duration")}
                  name = "duration"
                />
              </div>
            </div>
            <input
                type="text"
                class="form-control"
                id="Description"
                placeholder="Description"
                onChange={handleChange("description1")}
                name = "description1"
              />
            </div>
            

          )
        })}
        
        <button  className="add" onClick={addmore}>+ Add Experience</button>
      </div>
      <div className="container d-flex justify-content-between align-items-center">
      <button className="btn btn-primary" onClick={handleprev}>Previous</button>
     <button className="btn btn-info mx-5" onClick={submitData}>Preview</button>
     </div>
     <br></br>
     <br></br>
    </div>
  );
}
