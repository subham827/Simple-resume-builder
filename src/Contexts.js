import React, {createContext,useContext,useState} from 'react';
import App from './App';
export const Context1 = createContext();
const Contexts = () => {
    
    const [currentPage, setCurrentPage] = useState(0);
    const [formArray, setFormArray] = useState([])
    const [finalArray, setFinalArray] = useState([])
function submitData(){
   setFinalArray(finalArray=>[...finalArray,formArray])
    
    setCurrentPage(currentPage=>currentPage+1)

}
  return (
    <Context1.Provider value = {{currentPage,setCurrentPage,formArray,setFormArray,finalArray,setFinalArray,submitData}}>
        <App />
    </Context1.Provider>
  )
}

export default Contexts