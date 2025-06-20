import React from 'react'
import "/src/styles/navbar.css"

function Navbar() {
    return(
        <header className="navigation-bar">
            <div className="nav-logo">
                <img src="./src/assets/image/logo.png" alt="Logo" />
            </div>

            <nav className="nav-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Products</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar