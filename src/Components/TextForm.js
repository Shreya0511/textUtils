import React, {useState} from "react";
// import { useSpeechSynthesis } from "react-speech-kit";

function TextForm(props){
    const clickuphandler = () => {
        // console.log("Uppercase up was clicked!!");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been changed to Uppercase!!", "Success");

    }
    const clickclearhandler = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text has been cleared!!", "Success");
    }

    const clicktrimhandler = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces has been removed!!", "Success");
    }


    const clicklowerhandler = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been changed to Lowercase!!", "Success");
        
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const[text, setText] = useState("");
    return (
        <>
        <div>
            <h1 style = {{color : props.mode==="dark"?"white":"rgb(3, 37, 105)"}}>{props.heading}</h1>
            <div className = "mb-3">
                <textarea className = "form-control" value={text} onChange = {handleOnChange} id = "myBox" rows = "7" style= {{backgroundColor : props.mode==="light"?"white":"#53738d", color : props.mode === "light"?"#53738d":"white"}}></textarea>
            </div>
         <button className = "btn btn-primary mx-2 my-2" disabled = {text.length === 0} onClick = {clickuphandler}>Convert to Uppercase</button>
         <button className="btn btn-primary mx-2my-2" disabled = {text.length === 0} onClick = {clicklowerhandler}>Convert to Lowercase</button>
         <button className = "btn btn-primary mx-2 my-2" disabled = {text.length === 0} onClick={clickclearhandler}>Clear</button>
         <button className = "btn btn-primary mx-2 my-2" disabled = {text.length === 0} onClick= {clicktrimhandler}>Remove Extra spaces</button>
         {/* <button className = "btn btn-primary mx-2 speaker" onClick={StartSpeech}>Start Speaking</button> */}
        </div>
        <div className = "container my-3" style = {{color : props.mode === "dark"?"white":"#042743"}}>
            <h1>Your text Summary :</h1>
            <p> Above Text has {text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
            <p>You will Need {0.08 * text.split(/\s+/).filter((element) => {return element.length != 0}).length} minutes to read above textfield.</p>
            <h2>Preview</h2>
            <p>{text.length > 0? text: "Nothing to preview."}</p>
        </div>
</>
    )
}

export default TextForm;

//basically use state allows you set state of a website without actually using class and 
//in use state text is just like a variable which we call state variable.which we would like to set and which is the real checker of our state
//changing the value to text is capable to changing our state atleast for this time and we can't update text variable 
//just like a normal variable we have to use settext function to assign a new value to the variable.
//react always keep a look on use state variables and whenever it is changed using usestar settext method
//it is rendered on screen without delay or we can say state is changed 

//basically usestate create a variable which is checked by react every single momnet.


//assignment 
//you can add speak function if you want to and cunt vowels consonents and so on.
//fix the bug of 1 word count instead of 0
//to disable all buttons when there is no text in the box.
//disabled = {text.length() == 0}


