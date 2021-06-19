import React, { useState } from 'react';
import './App.css';
import guard from "./guard.jpg"

const App = () =>{

let time= new Date().toLocaleTimeString();

const [ctime, setCtime]=useState(time);
const [clog, setClog]= useState([]);
const [count, setCount]= useState(0);

const UpdateTime = () =>{
  time= new Date().toLocaleTimeString();
  setCtime(time);
};

const UpdateLog = () =>{
    setClog([...clog,ctime]);
    setCount(count+1);
};

setInterval(UpdateTime , 1000);

  return(
    <>

      <img src={guard} className='logo' alt='logo'/>

      <div className='header'>
        <h1>Current Time is : {ctime}</h1>
      </div>

      <div className='sidebar'>
        <button onClick={UpdateLog}>Click Here</button>
      </div>

      <div className='content'>
        {
          clog.map(log => 
            <li key={log.toString()}>
              You clicked at {log}
            </li>)
        }
      </div>
      
      <div className='footer'>
        <h1>You have clicked {count} times</h1>
      </div>

    </>
  );
}

export default App;
