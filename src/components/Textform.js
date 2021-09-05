import React, {useState} from 'react'


export default function Textform(props) {
  const handleUpClick = ()=>{
  //  console.log ("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = ()=>{
    //  console.log ("uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
    }
  const handleonchange = (event) => {
   // console.log ("on Change");
    setText (event.target.value);
  }
    const [text, setText] = useState('');
    return (
      <>
        <div className="container" style={ {color: props.mode === 'dark'? 'white': 'wblack'}}>
   <h1>{props.heading} </h1> 
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange = {handleonchange} style= { {backgroundcolor: props.mode === 'dark'? 'grey': 'white'}} id="mybox" rows="8"></textarea>
</div> 
<button className="btn btn.primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn.primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        <div className= "container">
<h2> your text summary</h2>
 <p> {text.split ("").length} words and {text.length} characters</p>
 <p> {0.008 *text.split ("").length} Minutes read</p>
 <h2> Preview</h2>
 <p> {text}</p>
        </div>
        </>
    )
}
