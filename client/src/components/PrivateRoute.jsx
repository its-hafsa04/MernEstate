import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

function PrivateRoute() {

    const { Currentuser} = useSelector((state) => state.user)
  return (
    Currentuser ? <Outlet/> : <Navigate to={'/sign-in'}/>
  )
}

export default PrivateRoute