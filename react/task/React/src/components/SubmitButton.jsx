// ---------- Method 1 - Functional component -------------
// ---- Default Export ----
import React from 'react'

const SubmitButton = () => {
  return <button>Default Submit</button>
}

export default SubmitButton

// ---- Named Export ----
// export const SubmitNameButton = () => {
//     return <button>Name Export Button</button>
// }

export const SubmitNameButton = ({ text, className}) => {
  <>
  return <button className={className}>{text} </button>
  {/* <input type="button" className={className} value={text} /> */}
  <SubmitButton text="Submit Now" className="primary"/>
  
  </>

}


// ---------- Method 2 - Class component ----------------
// import React, { PureComponent } from 'react'
// export default class SubmitButton extends PureComponent{
//     render(){
//         return <button>Submit Button</button>
//     }
// }


// 