import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';
import { BrowserRouter,Route, Routes, Link} from "react-router-dom";

function App() {
const[mode, setMode] = useState("light");
const[alert, setalert] = useState(null);
const[bttn, setbttn] = useState("Dark Mode");


const showAlert = (message, type) => {
      setalert(
        {
          msg : message,
          type : type
        }
      )
      setTimeout(()=>{
        setalert(null);
      }, 2000);
};


  
const toggleMode = () => {

  if(mode === "light"){
    setMode("dark");
    document.body.style.backgroundColor = "#042743"
    showAlert('Dark Mode has been Enabled', 'success');
    setbttn("Light Mode");
  }
  else{
    setMode("light");
    document.body.style.backgroundColor = "white"
    showAlert('Light Mode has been Enabled', 'success');
    setbttn("Dark Mode");
  }
}


  return (
    <BrowserRouter>
    <>
    <Navbar title = 'textutils' mode = {mode} toggleMode = {toggleMode} />
    <Alert alert = {alert} />
    <div className = "container my-3">
        <switch>
        <Routes>
        <Route path = "/" element = {<TextForm heading = "Enter the text to analyze Below" mode = {mode} bttn = {bttn} showAlert = {showAlert}/>}/>
        <Route path = "/About" element = {<About mode = {mode}/>} />
        </Routes>
        </switch>
      
    {/* <About /> */}
    </div>
    </>
    </BrowserRouter>
  );
}

export default App;
//my - 3 is a bootstrap class which gives margin of 3 to the heading in y axis.
