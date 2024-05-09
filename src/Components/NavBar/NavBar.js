import './NavBar.css';
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import logo from '../../Assets/Images/logo.png';
import invite from '../../Assets/Images/invite.svg';
import menu from '../../Assets/Images/menu.svg';
import cross from '../../Assets/Images/cross.svg';
function NavBar() {
    const [displayMode, setDisplayMode] = useState("none");
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [x, setX] = useState(null);
    const [y, setY] = useState(null);
    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);
    const [currentTab, setCurrentTab] = useState('Home');
    function handleMouseOver(e) {
        const data = e.target.getBoundingClientRect()
        const dataNavBar = document.querySelector('.nav-container').getBoundingClientRect();
        setX(data.left - dataNavBar.left - 1)
        setY(data.top - dataNavBar.top - 1)
        setHeight(data.height)
        setWidth(data.width)
    }

    function handleMouseOut(e) {
        const data = document.querySelector('.active').getBoundingClientRect()
        const dataNavBar = document.querySelector('.nav-container').getBoundingClientRect();
        setX(data.left - dataNavBar.left - 1)
        setY(data.top - dataNavBar.top - 1)
        setHeight(data.height)
        setWidth(data.width)
    }


    async function handleClick(e) {
        if (drawerOpen===false) {
            await setDisplayMode("flex")
        } else {
            await setDrawerOpen(false)
        }
    }
    useEffect(() => {
        setTimeout(() => setDisplayMode(() => drawerOpen ? "flex" : "none"), 300)
    }, [drawerOpen]);
    useEffect(() => {
        setDrawerOpen(() => displayMode === "flex" ? true : false)
    }, [displayMode]);
    function handleItemClick(e) {
        setCurrentTab(e.target.text)
        setDrawerOpen(false)
    }

    useEffect(() => {
        window.addEventListener('resize', handleMouseOut);

        return () => {
            window.removeEventListener('resize', handleMouseOut);
        };
    }, []);
    document.addEventListener('readystatechange', function() {
        if (document.readyState === 'complete') {
            handleMouseOut()
        }
    });
    return (
        <>
            <nav className="navbar-desktop">
                <div className="nav-container">
                    <img className='logo' src={logo} alt="logo"/>
                    <a className="invite" href="https://google.com" target="_blank" rel="noopener noreferrer">
                        <img className='invite_icon' src={invite} alt="invite"/>
                    </a>

                    <ul className="navbar-nav" onMouseOut={handleMouseOut}>
                        <li className="nav-item">
                            <NavLink onMouseOver={handleMouseOver}
                                     onClick={handleItemClick}
                                     to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onMouseOver={handleMouseOver}
                                     onClick={handleItemClick}
                                     to="/commands">Commands</NavLink>
                        </li>
                        <li className="nav-item">
                            <a onMouseOver={handleMouseOver}
                               href="https://github.com/AnmolPlayzz/polybot" target="_blank"
                               rel="noopener noreferrer">GitHub</a>
                        </li>
                        <div className={`underlay active-un`}
                             style={{
                                 top: `${y}px`,
                                 left: `${x}px`,
                                 width: `${width}px`,
                                 height: `${height}px`
                             }}></div>
                    </ul>

                </div>
            </nav>
            <nav className="navbar-mobile">
                <div className="nav-container">
                    <img className='logo' src={logo} alt="logo"/>
                    <button onClick={handleClick} className="menu" >
                        <img className={`menu_icon ${drawerOpen ? "icon_s" : ""}`} src={menu} alt="menu"/>
                        <img className={`close_icon ${drawerOpen ? "icon_s" : ""}`} src={cross} alt="menu_close"/>
                    </button>
                    <div className='current-tab'>
                        <p>
                            {currentTab}
                        </p>
                    </div>
                </div>
                <div className={`nav-menu ${drawerOpen ? "drawer-open" : ""}`}
                style={{display: displayMode}}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink onClick={handleItemClick} to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={handleItemClick} to="/commands">Commands</NavLink>
                        </li>
                        <li className="nav-item">
                            <a href="https://github.com/AnmolPlayzz/polybot" target="_blank"
                               rel="noopener noreferrer">GitHub</a>
                        </li>
                    </ul>
                    <a className="invite" href="https://google.com" target="_blank" rel="noopener noreferrer">
                        <img className='invite_icon' src={invite} alt="invite"/>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default NavBar;