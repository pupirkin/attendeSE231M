import React, { useState } from "react";
import "./header.css";
// import { useNavigate } from "react-router-dom";
import menu from "../../assets/images/menu.png";
import user from "../../assets/images/user.png";
import exit from "../../assets/images/exit.png";
import user1 from "../../assets/images/user1.png";
import { Link } from "react-router-dom";




function Header() {
    // const navigate = useNavigate()
    // const [click, setClick] = useState(false);

    // const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);

    return (
        <div className="Header">
            <div className="contentHeader">
                {/* <div className="menu-icon" onClick={handleClick}>
                    <img src={click ? cancel : menu} alt="menu" className="menuIcon" />
                </div> */}
                
                {/* <div className={click ? "nav-menu active" : "nav-menu"}> */}
                {/* <button onClick={closeMobileMenu}> */}
                <div className="menu">
                    <Link>
                        <img src={menu} className="menuIcon" />
                    </Link>
                </div>
                
                <div className="Logo">
                    <img src={user1} className="logo" />
                    <span className="logoText">Attendance <br/> System</span>

                    
                </div>

                <div className="Icons">
                    <Link><img src={user} className="icons" /></Link>
                    <Link to="/signin"><img src={exit} className="icons" /></Link>
                </div>
            </div>
        </div>
    );
}
export default Header;