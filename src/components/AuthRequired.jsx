import React from "react"
import { Outlet, Navigate, useLocation } from "react-router-dom"

function AuthRequired() {
    // const authenticated = true
    const isLoggedIn = localStorage.getItem("loggedin")
    const location = useLocation()
    // console.log(location)

    /*
    if (!authenticated) {
        return <Navigate
                to="/login" 
                state={{message: "You must log in first"}}
               />
    }
    */

    if(!isLoggedIn) {
        return (
            <Navigate
                to="/login"
                state={{
                    message: "You must log in first",
                    from: location.pathname
                }}
                replace
            />)
    }
    return <Outlet />
}

export default AuthRequired