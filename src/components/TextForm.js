import React, {useState} from 'react'

export default function TextForm(props) {
const [text, setText] = useState("Enter Text Here");

//Here we created function for button when we click on it the text will be converted to upperstring and then we pass the converted text to the setText function to update it 
const handleUpClick = () => {
let newText = text.toUpperCase();
setText(newText)
props.showAlert("Converted to uppercase.", "success")
}

    //Function for button when we click convert text to lower string
const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase.", "success")

    }

    //Function to clear the text area
    const handleClear = () => {
        setText('')
        props.showAlert("The text Box is cleared.", "success")

        }

    //It will help copy the text in the text area
    const handleCopy = () => {
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard.", "success")
    }

    //Remove all extra spaces
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces are eliminated.", "success")

    }
//This function is used to update the state we used in our text area and pass it as event
const handleOnChange = (event) => {
setText(event.target.value);
}

return (
<>
<div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
<h2 className='mb-3'>{props.heading}</h2>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#283747':props.mode, color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2 buton" style={{backgroundColor: props.mode==='dark'?'#283747':props.mode, color: props.mode==='dark'?'white':'black'}} id='bn1' onClick={handleLowClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2 buton"  style={{backgroundColor: props.mode==='dark'?'#283747':props.mode, color: props.mode==='dark'?'white':'black'}} id='bn2' onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2 buton"  style={{backgroundColor: props.mode==='dark'?'#283747':props.mode, color: props.mode==='dark'?'white':'black'}} id='bn3' onClick={handleClear}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2 buton" style={{backgroundColor: props.mode==='dark'?'#283747':props.mode, color: props.mode==='dark'?'white':'black'}}  id='bn4' onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2 buton" style={{backgroundColor: props.mode==='dark'?'#283747':props.mode, color: props.mode==='dark'?'white':'black'}} id='bn5' onClick={handleExtraSpace}>Remove Extra Space</button>
</div>

<div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Text Summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>    {/*average time to read a word is 0.008 minutes*/}
    <p>{0.008 * (text.split(/\s+/).filter((element)=>{return element.length!==0}).length)} minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview!"}</p>
</div>
</>
)
}
