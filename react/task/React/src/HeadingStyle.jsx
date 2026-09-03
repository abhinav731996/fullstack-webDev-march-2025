import React from 'react'

const HeadingStyle = () => {
    const myHeading = {
        backgroundColor: "#9a5656", color: "white", padding: "20px" 
    }
    const myHeading2 = {
        backgroundColor: "#4da141", color: "white", padding: "20px" 
    }
  return (
    <div>
       <h1  style={{ backgroundColor: "#331515", color: "white", padding: "20px" }}>
            This is your heading 1
        </h1>
        <h1 style={myHeading}>
            This is heading 2 
        </h1>
        <h2 style={true ? myHeading2 : myHeading}>
            This is heading 3
        </h2>
    </div>
  )
}

export default HeadingStyle
