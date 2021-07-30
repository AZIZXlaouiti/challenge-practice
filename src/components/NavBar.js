import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = ({Cart}) => {
    return (
        <ul>
            <li><Link to="/">Items</Link></li>
            <li><Link to="/checkout">CheckOut</Link></li>
            <li><Link to="/history">history</Link></li>
            <li>Cart ${Cart}</li>
            
        </ul>
    )
}

export default NavBar
