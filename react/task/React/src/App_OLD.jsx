import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JSXrule from './JSXrule'
import Task1 from './Task1' 
import SubmitButton from './components/SubmitButton'
import {PropProfile} from './components/PropProfile'
import Task2 from './Task2'
import Task3 from './Task3'

// function App_OLD() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App_OLD.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


// function App_OLD() {
//    return <JSXrule/>
  
// }
// export default App_OLD



// ------------- TASK-1 ---------------

// function App_OLD() {
//   return <Task1/>
  
// }
// export default App_OLD


// ---------------- props -----------------
// function App_OLD() {
//   return( 
//     <div>
//       <SubmitButton text="Submit Now" className="primary"/>
//     </div>
//     )
// }
// export default App_OLD


// function App_OLD() {

//   // String but url
//     const image = "https://img.freepik.com/premium-vector/business-woman-character-vector-illustration_1133257-2432.jpg?semt=ais_hybrid&w=740&q=80"

//   // String
//     const name =  "Sahil Kumar"

//   // Number
//     const age =  33

//   // Bullean or logical type
//     const online = true

//   // Date
//     const joinigDate = new Date()

//   // Array
//     const skills = ["React",  "HTMLAllCollection", "JavaScript"]

//   //Array objects
//   const experience = [
//     {id: 1, jobProfile: "Jr Developer", year: 2000},
//     {id: 2, jobProfile: "Sr Developer", year: 2015},
//     {id: 3, jobProfile: "Team Lead", year: 2020},
//   ]


//     const handleClick = ()=> {
//     alert("This is alert from App_OLD.jsx")
//   }


//   return( 
//     <div>
//       <PropProfile
//       image = {image}
//       name = {name}
//       age = {age}
//       online = {online}
//       joinigDate = {joinigDate}
//       skills = {skills}
//       experience = {experience}
//       onclick = {handleClick}
//       />

//       <button onClick={handleClick}>Click Here</button>
//     </div>
//     )
// }
// export default App_OLD


// ------------ Task-2 -------------
// import React from 'react'

// function App_OLD() {
//   return (
//     <div>
//       <Task2/>
//     </div>
//   )
// }

// export default App_OLD


// ----------- Hooks -------------

// import React from 'react'
// import Hooks from './Hooks'

// function App_OLD() {
//   return (
//     <div>
//       <Hooks/>
//     </div>
//   )
// }

// export default App_OLD



// --------------- Task3 ---------------

// import React from 'react'

// function App_OLD() {
//   return (
//     <div>
//       <Task3/>
//     </div>
//   )
// }

// export default App_OLD



// ----------- reducer -----------
// import React from 'react'
// import UseReduser from './UseReduser'

// function App_OLD() {
//   return (
//     <div>
//       <UseReduser/>
//     </div>
//   )
// }

// export default App_OLD


// -------------- Styling react app_OLD --------------

// import React from 'react'
// import HeadingStyle from './HeadingStyle'
// import Dashboard from './page/Dashboard'
// // import "./assets/css/dashboard.module.css"
// import UserStatus from './page/UserStatus'

// function App_OLD() {
//   return (
//     <div>
//       <HeadingStyle/><hr />
//       <Dashboard/><hr />
//       <UserStatus status={'true'}/>
//       <UserStatus/>
//       <UserStatus status/><hr />
//     </div>
//   )
// }

// export default App_OLD



// ----------- Task-4 ----------------

import React from 'react'
import Task4 from './Task4'

function App_OLD() {
  return (
    <div>
      <Task4/>
    </div>
  )
}

export default App_OLD
