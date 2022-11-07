// import logo from './logo.svg';
// import './App.css';
import React,{useState} from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import About from "./components/About";
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {

  const [mode,setMode]=useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
const removeBodyClass=()=>{
  document.body.classList.remove('bg-light');
  document.body.classList.remove('bg-dark');
  document.body.classList.remove('bg-success');
  document.body.classList.remove('bg-danger');
  document.body.classList.remove('bg-warning');
}
  const toggleMode=(cls)=>{
    removeBodyClass();
    console.log(cls);
    document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark Mode has been Enabled","success");
    // document.title="TextUtil-DarkMode";
    // setInterval(()=>{
    //   document.title="TextUtil is Amazing"
    // },2000)

    // setInterval(()=>{
    //   document.title=" Install TextUtil Now"
    // },1500)

    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been Enabled","success");
      // document.title="TextUtil-LightMode"
    }
  }
  return(
    <>

      {/* <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/> */}
       {/* <div className="container my-3"> */}
        
 
        <BrowserRouter>
          <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          
            <Routes>
            <Route exact path="/" element={<Textform heading="Try TextUtils - Word Counter character counter Remove Extra spaces" showAlert={showAlert} mode={mode} />}></Route>
            <Route exact path="/about" element={<About mode={mode}/>}></Route>
            </Routes>
         

      </BrowserRouter>
       
       {/* </div> */}
       
        
    
    </>
 
  );
}

export default App;
