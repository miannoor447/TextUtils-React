
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
// import {Routes,Route,} from "react-router-dom"; 
function App() {
const [mode,setMode]=useState('light')
const toggleMode=()=>
{
  if(mode==='dark')
  {
    setMode('light');
    document.body.style.backgroundColor="white"
  }
  else{
    setMode('dark')
    
    document.body.style.backgroundColor="#202124"
  }
} 

  return (
  <>
  
    <Navbar Title="TextUtils"  aboutText="About" mode={mode} toggleMode={toggleMode}/>
    
    <div className="container  my-3">
    <TextForm  mode={mode} heading="Enter Your text to analyze"/>
        
     {/* <Routes>
      <Route path='/' element={ }></Route>
      <Route path='/About' element={<About mode={mode}/>}/>
     </Routes>
       */}
    
    </div>
    </>


  );
}

export default App;
