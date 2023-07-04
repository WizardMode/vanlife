import React from "react"
import { Link, NavLink } from "react-router-dom"

function Header() {
  

    return (
        <header>
        <Link className="site-logo" to="/">#VANLIFE</Link>
        <nav>
          <NavLink 
            to="/host"
            className={({isActive}) => isActive? "active-link" : null}
          >
            Host
          </NavLink>
          <NavLink
            to="/vans"
            className={({isActive}) => isActive? "active-link" : null}
          >
            Vans
          </NavLink>
          <NavLink
            to="/about"
            className={({isActive}) => isActive? "active-link" : null}
          >
            About
          </NavLink>
        </nav>
      </header>
    )
}

export default Header