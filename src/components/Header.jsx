import React from "react"
import { Link, NavLink } from "react-router-dom"
import icon from "../assets/images/avatar-icon.png"

function Header() {
    const activeStyles = {
      fontWeight: "bold",
      textDecoration: "underline",
      color: "#161616"
    }

    return (
        <header>
        <Link className="site-logo" to="/">#Vanlife</Link>
        <nav>
          <NavLink 
            to="/host"
            // className={({isActive}) => isActive? "active-link" : null}
            style={({isActive}) => isActive? activeStyles : null}
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            // className={({isActive}) => isActive? "active-link" : null}
            style={({isActive}) => isActive? activeStyles : null}
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            // className={({isActive}) => isActive? "active-link" : null}
            style={({isActive}) => isActive? activeStyles : null}
          >
            Vans
          </NavLink>
          <Link to="login" className="login-link">
            <img
              src={icon}
              className="login-icon"
            />
          </Link>
        </nav>
      </header>
    )
}

export default Header