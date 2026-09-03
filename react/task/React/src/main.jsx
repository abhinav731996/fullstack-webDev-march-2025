import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import JSXrule from "./JSXrule.jsx"
import "bootstrap/dist/css/bootstrap.css"
import App_OLD from './App_OLD.jsx'
// import "../node_modules/bootstrap/dist/css/bootstrap.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <JSXrule /> */}
    {/* <App_OLD /> */}
    <App/>
  </StrictMode>,
)


// // const myElemnt = <h1 style={{color: 'blue'}}>I love JSX</h1>;
// const myElemnt = React.createElement('h1', null, 'Creact by react');
// const root = createRoot(document.getElementById('root'));
// root.render(myElemnt);
