import React from "react"
import { Outlet, Navigate } from "react-router-dom"

function AuthRequired() {
    // const authenticated = true
    const isLoggedIn = localStorage.getItem("loggedin")
    
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
                state={{message: "You must log in first"}}
                replace
            />)
    }
    return <Outlet />
}

export default AuthRequired