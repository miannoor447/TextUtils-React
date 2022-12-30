import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(prop) {
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleUpclick=()=>
    {
        let newText=text;
        setText(newText.toUpperCase());
    }

    const [text,setText]=useState("")   
    const handleLwClick=()=>
    {
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleReverseClick=()=>
    {
    const arrayStrings = text.split("");
    const reverseArray = arrayStrings.reverse();
    const joinArray = reverseArray.join("");
    setText(joinArray);
    }
  return (
    
    <>
<div className="container  mb-3" style={{color:prop.mode ==='dark'?'white':'black'}}>
    <h1>{prop.heading}</h1>

  <textarea className="form-control" style={{backgroundColor:prop.mode ==='light'?'white':'#202124',color:prop.mode ==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
    <button className="btn btn-primary mx-3" onClick={handleUpclick}>GET IN UPPERCASE</button>
    <button className="btn btn-primary mx-3" onClick={handleLwClick}>get in lower case</button>
    <button className="btn btn-primary mx-3" onClick={handleReverseClick}>Get in reverse</button>
    

    <div className="container my-3"  style={{color:prop.mode ==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>  
        <p>your text has {(text.split(" ").length)-1} words And {text.length} Characters</p>
        <p>It will take {0.008*((text.split(" ").length)-1)} minutes to read your text</p>
    </div>
</>
  )

}
TextForm.propTypes=
{
    headig: PropTypes.string,
}
TextForm.defaultpropTypes=
{
    headig:"Heading",
}
