import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col-md-2">
                React bootstrap component
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <ul>
                    <li><Link to="/"> Dashboard</Link></li>
                    <li><NavLink to="setting"> Setting</NavLink></li>
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

export default RootLayout
