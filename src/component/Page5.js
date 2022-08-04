import React from 'react'
import { useContext } from 'react'
import { Context1 } from '../Contexts'

const Page5 = () => {
    const { finalArray,currentPage,setCurrentPage,setFinalArray,setFormArray } = useContext(Context1);
    const removeall = ()=>{
        setFinalArray([]);
        

    }
    const done = ()=>{
        setCurrentPage(0);
        
        setFormArray({});
    }
    const handledelete = (index)=>{
        let newArray = finalArray.filter((item,i)=>{
            return i!==index;
        }
        )
        setFinalArray(newArray);
    }
  return (
   <>
   <h1>My resumes</h1>
   <hr></hr>
  {finalArray.length!==0 ?  finalArray.map((item,index)=>{
    return (
        <div className='container'>
            <h3>Resume {index + 1}</h3>
            <div style={{ border : "1px solid black"}}>
                <h4>Personal Details</h4>
                <p>Name : {item.first_name} {" "} {item.last_name} </p>
                <p>Email : {item.email} </p>
                <p>Phone : {item.phone_number} </p>
                <p>LinkedIn : {item.linkedin}</p>
                <p>Github : {item.github}</p>
                <hr></hr>
                <h4>Education</h4>
                <p>College : {item.college}</p>
                <p>School : {item.school}</p>
                <p>Qualification : {item.qualification}</p>


            </div>
            <button className='btn btn-danger' onClick={()=>handledelete(index)}>Delete</button>

        </div>
    )
  }) : <h1>No Resumes</h1>}
  <div className='container d-flex justify-content-space-between'>
  <button onClick={()=> done()} className="btn btn-success mx-4 my-2">Done 👍</button>
  <button onClick={()=>removeall()} className="btn btn-danger mx-3 my-2">Remove all 💣</button>
  {/* <button className='btn btn-primary mx-3' onClick={()=> setCurrentPage(1)}>Edit 📝</button> */}

  </div>


   </>
  )
}

export default Page5