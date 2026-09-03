import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <section className="bg-light p-3 p-md-4 p-xl-5">
      <div className="container">
        <Outlet/>
      </div>
    </section>
  )
}

export default AuthLayout
