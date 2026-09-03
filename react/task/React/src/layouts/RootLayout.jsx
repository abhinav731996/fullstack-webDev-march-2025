import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      RootLayout
      <div className="container">
        {/* Header Section */}
        <div className="row">
            <div className="col-md-2">
                React Bootstrap component
            </div>
        </div>
        
        <div className="row">
            {/* SideBar */}
            <div className="col-md-3">
                <ul>
                    {/* // either we use this anchor tag or use link but we use only link tag to avoid page refresh (link active class show nhi krta but navlink krta h ) 
                    <li> <a href="/"> Dashboard</a></li>
                    <li><a href="/userStatus">UserStatus</a></li>
                    <li><a href="/setting">Setting</a></li> */}
                    <li> <Link to="/"> Dashboard</Link></li>
                    <li><NavLink to="/userStatus">UserStatus</NavLink></li>
                    <li><NavLink to="/setting">Setting</NavLink></li>
                </ul>
            </div>

            {/* Main Body */}
            <div className="col-md-9">
                Body <Outlet/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RootLayout
