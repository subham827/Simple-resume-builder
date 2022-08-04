import React from 'react';

import { useHistory } from 'react-router-dom';
import './Home.css';

const Home = ({nextPage}) => {
    const history = useHistory();
    const handlenext = () => {
        // history.push('/Page1');
        nextPage();
    }
   
  return (
      <>
       <div className='content'>
      <div className='settings'>
          <h1 style={{fontSize: 30}}>Build your premium resume now</h1>
          <div className='settings_select'>
              <span>1. Click on Create </span>
              <span>2. Fill the form</span>
              <span>3. Click on Preview</span>
              <span>4. Click on Download</span>
             
           
          </div>
      </div>
      <img src='./resume1.jpg' className='banner' alt='k'></img>
  </div>
  <div className='container d-flex justify-content-center'>

  <button className='buttons' onClick={handlenext}>CREATE</button>

  </div>
  
 
      </>
  );
};

export default Home;
