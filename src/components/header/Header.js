import React from 'react'
import './header.css'
import Search from './Search'

function Header() {
    return (
        <div className="header">
            <img className="header__img" src="https://cdn.nutrabay.com/wp-content/uploads/2021/11/Nutrabay-top-logo-white.png" alt="Logo"/>
            <Search/>
            <div className="header__loginRegister">LOGIN/REGISTER</div>
            <h1 className="header__divider">|</h1>
            <div className="header__loginRegister">CART / $0</div>
        </div>
    )
}

export default Header
