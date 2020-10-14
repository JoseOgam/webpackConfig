import React from "react"
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </div>
    )
}

export default NavBar