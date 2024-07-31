/* eslint-disable no-unused-vars */
import React from 'react'
import "./header.scss"
import logo from "../../assets/images/logo.svg"

function Header() {
    return (
        <div className='headerContainer'>
            <img src={logo} alt="Logo" />
            <h1>Contact App</h1>
        </div>
    )
}

export default Header