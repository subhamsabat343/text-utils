import React,{useState} from 'react'

function About(props) {

    // const [mystyle,setMystyle]=useState(    {
    //     color:'black',
    //     backgroundColor:'white'
    // });

    // const [btntext,setBtntext]=useState("Enable Dark Mode");

    // const toggleStyle=()=>{
    //    if( mystyle.color === 'black')
    //    {
    //         setMystyle(  {
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'1px solid white'
    //         })
    //         setBtntext("Enable Light Mode");
    //    }


    //    else{
    //         setMystyle(  {
    //             color:'black',
    //             backgroundColor:'white'
    //         })
        
    //         setBtntext("Enable Dark Mode");
    //     }
    // }
let mystyle={
    color:props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
    // border:'2px solid ',
    // borderColor:props.mode==='dark'?'white':'#042743'

}



  return (
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1 className='my-3'>About Us</h1>
    <div className="accordion" id="accordionExample" style={mystyle}>
    <div className="accordion-item" >
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze Your text</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body"style={mystyle} >
           <p> textutils gives you a way to analyze your text quickyand efficiently . Be it word count ,character count time take to read the text.</p> 
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed " style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
          <p>TextUtils is free character counter tool that provide instant character count & word count stastics for a given text .TextUtils reports the no of words and characters .Thus it is suitable for writting text with word/ character limit.</p>
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
           <strong>browser Compatible</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
            <p>This is word counter software works in any web browser such as Chrome ,FireFox,Internet Explorer , safari,Opera Mini.It suits to count characters in facebook ,blog,books,excel document,pdf document,essay,etc.</p>
        </div>
        </div>
    </div>
    </div>


    {/* <div className="container my-3">
        <button onClick={toggleStyle} type="bytton" className='btn btn-primary'>{btntext}</button>
    </div> */}
  
    </div>
  )
}

export default About