import logo from './assets/image/logo.png'

function Header() {
    return(
        <header>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav className='navigation-links'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header