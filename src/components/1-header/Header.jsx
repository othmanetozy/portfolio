import React from "react"
import './header.css';
const Header = () =>{
    return(
        <header>
            <nav>
            <ul className="flex">
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">Resume</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
            </nav>
            <button>
                light
            </button>
        </header>
    );
}


export default Header;