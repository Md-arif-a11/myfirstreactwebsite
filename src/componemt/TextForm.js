import React,{useState} from 'react'

export default function TextForm(props){
  const handleUpClick =()=>{
    console.log("UpperCase are Click " + text);
    let newText = text.toUpperCase();
   
    setText(newText)
    props.showAlert("converted to upperCase","success");

  }
  const handleLoClick =()=>{
    console.log("LowerCase are Click " + text);
    let newText = text.toLowerCase();
    
    setText(newText)
    props.showAlert("converted to lowerCase","success");
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("converted to speak","success");

  }
  const handleClearClick =()=>{
    
    let newText = ' ';
    
    setText(newText)
    props.showAlert("converted to newText","success");

  }
  const handleCopy = ()=>{
    var text = document.getElementById("myBook");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("converted to copyText","success");

  }
     const handleExtraSpaces =()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    props.showAlert("converted to removeExtraSpaces","success");

     }
  

  


 const handleOnChange=(even)=>{ 
  
  setText(even.target.value)
 }


const [text, setText] = useState('Enter text here there');
 
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
       <div className="mb-2">
           <label htmlFor="myBook" className="form-label">Example textarea</label>
           <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white'}} id="myBook" rows="8"></textarea>      
          
         </div>
         <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
         <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
         <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
         
         <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
         <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
         <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove ExterSpeace</button>


        
         
    </div>
    <div className="container my-2">
      <h2>Your test summary </h2>
      <p>{text.split(" ").length} <b>words and</b>  {text.length} <b>Characters</b> </p>
      <p>{0.008 * text.split(" ").length} <b>Minutes read</b></p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

