import './NavBar.css';
import {NavLink} from "react-router-dom";
import {useState} from "react";
import logo from '../../Assets/Images/logo.png';
import invite from '../../Assets/Images/invite.svg';
function NavBar() {

    const [active, setActive] = useState('');
    const [x, setX] = useState(null);
    const [y, setY] = useState(null);
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);
    function handleMouseOver(e) {
        setActive('active-un')
        const data = e.target.getBoundingClientRect()
        const dataNavBar = document.querySelector('.nav-container').getBoundingClientRect();
        setX(data.left - dataNavBar.left - 1)
        setY(data.top - dataNavBar.top - 1)
        setHeight(data.height)
        setWidth(data.width)
    }
    function handleMouseOut(e) {
        setActive('')
    }

    return (
        <nav className="navbar-desktop">
            <div className="nav-container">
                <img className='logo' src={logo}/>
                <a className="invite" href="https://google.com" target="_blank" rel="noopener noreferrer">
                    <img className='invite_icon' src={invite}/>
                </a>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
                                 to="/commands">Commands</NavLink>
                    </li>
                    <li className="nav-item">
                        <a onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
                           href="https://github.com/AnmolPlayzz/polybot" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <div className={`underlay ${active}`}
                         style={{
                             top: `${y}px`,
                             left: `${x}px`,
                             width: `${width}px`,
                             height: `${height}px`
                         }}></div>
                </ul>

            </div>
        </nav>
    )
}

export default NavBar;