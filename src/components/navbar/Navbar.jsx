import React, { useState } from 'react';
import './navbar.css';

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import logo from '../../assets/logo.svg';

const Menu = () => {
    return (
        <>
            <p><a href="#home"> Home </a></p>
            <p><a href="#wgpt3"> What is GPT </a></p>
            <p><a href="#possibility"> Open AI </a></p>
            <p><a href="#features"> Case Studies </a></p>
            <p><a href="#blog"> Library </a></p>
        </>
    )
}

const Navbar = () => {
    const [ toggle_menu, set_toggle_menu] = useState(false);

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu />
                </div>
            </div>

            <div className="gpt3__navbar-sign">
                <p> Sign in </p>
                <button type="button"> Sign up </button>
            </div>

            <div className="gpt3__navbar-menu">
                { toggle_menu ? <RiCloseLine 
                    color='#fff'
                    size={27}
                    onClick={()=> set_toggle_menu(false)}
                /> : <RiMenu3Line 
                    color='#fff'
                    size={27}
                    onClick={()=> set_toggle_menu(true)}
                />}

                { toggle_menu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <Menu />
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <p> Sign in </p>
                                <button type="button"> Sign up </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;