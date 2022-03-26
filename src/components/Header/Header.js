import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <nav className='navigation-bar'>
            <img src={logo} alt="" />
            <ul>
                <a href="/Home">Home</a>
                <a href="/Order">Order</a>
                <a href="/Review">Review</a>
                <a href="/Login">Login</a>
            </ul>
        </nav>
    );
};

export default Header;