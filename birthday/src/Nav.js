import React from 'react'
import { BrowserRouter as Router, Link, NavLink,Redirect } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import './Nav.css'

function Nav() {
    return (
        <nav>
            <li>
                <NavLink exact to='/'>All Users</NavLink>
            </li>
            <li>
                <NavLink exact to='/birthday'>Birthday</NavLink>
            </li>
        </nav>
    )
}

export default Nav
