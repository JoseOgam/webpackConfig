import React from "react"
import { Link } from "react-router-dom"
const NavBar = () => {
    return (
        <div>
            <div className="NavBar">
                 <ul>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
            </ul>
           </div>
        </div>
    )
}

export default NavBar