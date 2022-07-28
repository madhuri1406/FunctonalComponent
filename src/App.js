import React from 'react';
import React, { useState } from 'react';
import './style.css';
import { React, useState } from 'react';
import Card from './Card.js';
function App() {
  const [Details, ] = useState([
      { name: 'madhuri', salary: 100000 ,color:"#00ff80"},
      { name: 'madhu', salary: 500000,color:"#00ffff" },
      { name: 'tej', salary: 123000 ,color:"#ff8000" },
      { name: 'harry', salary: 15000,color:"#0080ff"  },
    ]);
  const [index, setIndex] = useState(0);
  console.log(Details);


  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={()=>{if(index>0){
        setIndex(index - 1)
      }}}>Previous</button>
      <button onClick={()=>{if(index<Details.length-1){
        setIndex(index + 1)
      }}}>Next</button>
      <div>
        {/* {
         Details.map(data) =>{

         }
       } */}
        <Card employeeDetails={Details[index]}  color={}/>
      </div>
    </div>
  );
}

export default App;
