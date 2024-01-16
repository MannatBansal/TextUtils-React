import React from 'react'

function Alert(props) {
    //capitalize func will take the word convert to lower and then change 1st letter to uppercase
    //slice that letter and take whole left word
    const capitalize=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  //we need to use this props.alert in start and then && because if props is null it will return the 2nd part 
  //otherwise if we dont use it we get error
  //it is because all jsx is converted to javascript
    return (
props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
<strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
{/*<button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>*/}
</div>
  )
}

export default Alert
