
import Page1 from "./component/Page1"
import Page2 from "./component/Page2"
import Page3 from "./component/Page3"
import Page4 from "./component/Page4"
import Page5 from "./component/Page5"
import Home from "./component/Home"
import { useState,useContext } from "react";
import { Context1 } from "./Contexts"

import { BrowserRouter as Router,Switch,Route as Routes } from "react-router-dom"
export default function App()  {
  const { currentPage, setCurrentPage, formArray, setFormArray, finalArray, setFinalArray } = useContext(Context1);
  
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    institute : "",
    position : "",
    duration : "",
     description1 : "",
  
    email: "",
    phone_number: "",
    city: "",
    state: "",
    email : "",
    linkedin : "",
    github : "",
    college : "",
    qualification : "",
    school : "",
    schoolqualification : "",
    title: "",
    projectLink: "",
    description: "",
    date1 : "",
    date2 : "",
    date3 : "",
    date4 : "",



  });



  const nextPage = () => {
    
    setCurrentPage(currentPage + 1);
    console.log(currentPage);
  }
  const prevPage = () => {
  
    setCurrentPage(currentPage - 1);
  }
  const handleChange = input => (event) => {
    setValues({ ...values, [input]: event.target.value });
  }
  return (
    <>
     <nav class="navbar navbar-light" style={{backgroundColor : '#e3f2fd'}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    

      Resume builder
    </a>
  </div>
</nav>
    <div>
     {currentPage === 0 && <Home nextPage={nextPage} />}
      {currentPage === 1 && <Page1 prevPage={prevPage} nextPage={nextPage} handleChange={handleChange} values = {values}/>}
      {currentPage === 2 && <Page2 prevPage={prevPage} nextPage={nextPage} handleChange={handleChange} values={values}/>}
      {currentPage === 3 && <Page3 prevPage={prevPage} nextPage={nextPage} handleChange={handleChange} values={values}/>}
      {currentPage === 4 && <Page4 prevPage={prevPage} nextPage={nextPage} handleChange={handleChange} values={values}/>}
      {currentPage === 5 && <Page5   handleChange={handleChange} values={values}/>}

    </div>
    </>
  );
}
