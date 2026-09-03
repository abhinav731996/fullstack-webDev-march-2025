import React from 'react'
import ReactLogo from './assets/react.svg'
import LoginButton from './components/LoginButton'
import SubmitButton, {SubmitNameButton} from './components/SubmitButton'
import Profile, {Profile as NewProfile} from "./components/Profile"
import Avatar from './components/Avatar'

// const JSXrule = () => {
//   // // ------JSX rule 3------
//   // return (
//   //   <div>

//   //     <h1>JSX rules</h1>
//   //     <hr />
//   //     <img src={ReactLogo} width={100} alt="..." />
//   //     <hr />
//   //     <p>Example of single root element</p>
//   //   </div>
//   // )



//   // // ----------JSX rule 4--------

//   // Start ---- Here you can add your exp.
//   const myVariable = "This is the jsx variable";
//   const x= 10;
//   const y = 20;
//   const SumOfXY = (x,y) => x+y;
//   const names = [
//   { id:1, firstname:'Amit' },
//   { id:2, firstname:'Ashish' },
//   { id:3, firstname:'Rahul' }
//   ]

//   // End ----
//   return(
//     <div>
//       Variable: {myVariable}
//       <hr />
//       Sum of X & Y: {SumOfXY(2,3)}
//       <hr />
//       Ternary Example : {x > y ? "X is big" : "Y is big"}
//       <hr />
//       Object of array method example: 
//       <ul>
//         {names.map((name, index)=>{
//           return (
//             <li key={index}>{name.firstname}</li>
//           )
//         })}
//       </ul>
//       <hr />
//       <LoginButton/>
//       <hr />
//       <SubmitButton/>
//       <hr />
//       <SubmitNameButton/>
//     </div>
//   )
// }


// const JSXrule = () => {
//   return(
//     <div>
//       {/* <Avatar1/> */}
//       <Profile/>
//       <hr />
//       <NewProfile/>
//     </div>
//   )
// }

// export default JSXrule

const JSXrule = () => {
  return(
    <div>
      <Avatar/>
    </div>
  )
}

export default JSXrule
