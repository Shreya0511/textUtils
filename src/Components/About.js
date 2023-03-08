import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import React,{useState} from 'react'


export default function About(props) {


    //this state is for changing text on button
    // const[buttn, setButtn] = useState('Enable Dark Mode');
    


    //this state is for changing style of different state
    // const[style, setstyle] = useState({
    //      backgroundColor : "white",
    //      color : "black"
    // })
    
    // const toggleDark = () => {
    //     if(style.backgroundColor == "white"){
    //         setstyle({
    //             border : "1px solid white",
    //             backgroundColor : "#085391",
    //             color : "white"
    //         })
    //         setButtn("Enable Light Mode");

    //     }

    //     if(style.backgroundColor == "#085391"){
    //         setstyle({
    //             backgroundColor : "white",
    //             color : "#085391"
    //         })
    //         setButtn("Enable Dark Mode");
    //     }
        
    // }



  return (
     
   
    <div className = "container" style= {{backgroundColor : props.mode==="light"?"white":"#53738d", color : props.mode === "light"?"#53738d":"white"}}>
        <h2 className = "my-3">About Us</h2>
        <div className ="accordion" id="accordionExample">
  <div className ="accordion-item">
    <h2 className ="accordion-header" id="headingOne">
      <button className ="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style= {{backgroundColor : props.mode==="light"?"white":"#53738d", color : props.mode === "light"?"#53738d":"white"}}>
        Analyze Your text
      </button>
    </h2>
    <div id="collapseOne" className ="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className ="accordion-body" style= {{backgroundColor : props.mode==="light"?"white":"#53738d", color : props.mode === "light"?"#53738d":"white"}}>
        <strong>Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or knowing time it will take to read the whole text.</strong>
      </div>
    </div>
  </div>
  <div className ="accordion-item">
    <h2 className ="accordion-header" id="headingTwo">
      <button className ="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style= {{backgroundColor : props.mode==="light"?"white":"#53738d", color : props.mode === "light"?"#53738d":"white"}}>
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className ="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className ="accordion-body" style= {{backgroundColor : props.mode==="light"?"white":"#53738d", color : props.mode === "light"?"#53738d":"white"}}>
        <strong>TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of word and characters. Thus it is suitable for wirting text with word per character limit.</strong>
      </div>
    </div>
  </div>
  <div className ="accordion-item">
    <h2 className ="accordion-header" id="headingThree">
      <button className ="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style= {{backgroundColor : props.mode==="light"?"white":"#53738d", color : props.mode === "light"?"#53738d":"white"}}>
         Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className ="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className ="accordion-body" style= {{backgroundColor : props.mode==="light"?"white":"#53738d", color : props.mode === "light"?"#53738d":"white"}}>
        <strong>This word counter software works in any web browsers such as chrome, Firefox, Inernet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</strong>
      </div>
    </div>
  </div>
</div>
{/* <div className = "container my-2">
    <button className='btn btn-primary my-2 toggle' onClick = {toggleDark}>{buttn}</button>
</div> */}
      
    </div>
  )
}

//rfc will give function based component of react.
