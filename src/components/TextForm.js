import React, {useState} from 'react'

export default function TextForm(props) {
const [text, setText] = useState("Enter Text Here");

//Here we created function for button when we click on it the text will be converted to upperstring and then we pass the converted text to the setText function to update it 
const handleUpClick = () => {
let newText = text.toUpperCase();
setText(newText)
props.showAlert("Converted to uppercase.", "success")
}

const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase.", "success")

    }
    const handleClear = () => {
        setText('')
        props.showAlert("The text Box is cleared.", "success")

        }

    const handleCopy = () => {
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard.", "success")

            }

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
<h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
</div>
{/*handleUpClick is a custom func we made to trigger event*/}
<button className="btn btn-primary mx-2 my-2" id='bn1' onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2 my-2"  id='bn2' onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2 my-2"  id='bn3' onClick={handleClear}>Clear Text</button>
<button className="btn btn-primary mx-2 my-2"  id='bn4' onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2 my-2"  id='bn5' onClick={handleExtraSpace}>Remove Extra Space</button>
</div>

<div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>Text Summary</h2>
    <p>{text.trim() === "" ? 0 : text.trim().split(" ").length} words and {text.length} characters</p>    {/*average time to read a word is 0.008 minutes*/}
    <p>{0.008 * (text.trim() === "" ? 0 : text.trim().split(" ").length)} minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in text area above to preview it here."}</p>
</div>
</>
)
}
