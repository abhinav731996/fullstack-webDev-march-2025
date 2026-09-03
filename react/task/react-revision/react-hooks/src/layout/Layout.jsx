import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-md-2">
                React Hooks
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <ul>
                    <li><Link to='/'>Home page</Link></li>
                    <li><NavLink to='/UsestateHook'>UseState </NavLink></li>
                    <li><NavLink to='/UseReducerHook'>UseReducer </NavLink></li>
                    <li><NavLink to='/UseRefHook'>UseRef </NavLink></li>
                    <li><NavLink to='/UseEffectHook'>UseEffectHook</NavLink></li>
                </ul>
            </div>
            <div className="col-md-9">
                <Outlet/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
