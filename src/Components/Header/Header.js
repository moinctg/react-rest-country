import './Header.css';


import React from 'react';

const Header = () => {
    return (
        <div >
            <nav>
                <ul className="menu">
                    <a href='/home'>Home</a>
                    <a href='/about'>About</a>
                    <a href='/contact'>Contact</a>
                    <a href='/profile'>Profile</a>
                </ul>
            </nav>
        </div>
    );
};

export default Header;