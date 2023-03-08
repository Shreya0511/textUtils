import React from 'react'

export default function Alert(props) {

const capitalize = (word) => {
    const newWord = word.toLowerCase();
    return newWord.charAt(0).toUpperCase() + word.slice(1);
}

  return (
    <div style = {{height : '50px'}}>
{props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
</div>  
}
</div>
  )}

//to do
//you have to add multiple colors dark mode in your website like red, green as choosen by user
//fix the bug on 0 words thing in textform.js

