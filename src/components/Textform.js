import React,{useState} from 'react';


function Textform(props) {



    const [text,setText]=useState('Enter Text here ');
    const handleUpClick=()=>{
        //console.log("Upper Case was Clicked "+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to Upper case","success");
    }
    const handleLoClick=()=>{
      //console.log("Upper Case was Clicked "+text);
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("converted to Lower case","success");
  }

    const handleOnChange=(event)=>{
        setText(event.target.value)
    }

    const handleonClear=()=>{
      setText('');
      props.showAlert("Text Cleared","success");
    }

    const handlecopyText=()=>{
      // let text=document.getElementById('exampleFormControlTextarea1');
      // text.select();
      // navigator.clipboard.writeText(text.value);
      // document.getSelection().removeAllRanges();
      // props.showAlert("Text Copied","success");
      navigator.clipboard.writeText(text);
      props.showAlert("Text Copied","success");

    }

    const RemoveExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Space Removed","success");
    }
  return (
    <>
    <div className='container' style={{color: props.mode==='dark' ?'white':'black'}}>
    <h1 className='mb-4'>{props.heading}</h1>
    <div className="mb-3 my-3">
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark' ?'#13466e':'white',color: props.mode==='dark' ?'white':'black'}}></textarea>
    </div>

    <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handleLoClick}>Convert to lower case</button>
    <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2"  onClick={handleUpClick}>Convert to upper case</button>
    <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2"  onClick={handleonClear}>Clear Text</button>
    <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2"  onClick={handlecopyText}>Copy Text</button>
    <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2"  onClick={RemoveExtraSpaces}>Remove Extra spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark' ?'white':'black'}}>
        <h1 >Yout Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}  words {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}  Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length> 0 ? text:"Nothing preview  here"}</p>
   
    </div>
    </>
  )
}

export default Textform