import React, { useState } from "react";
import "./header.css";
// import { useNavigate } from "react-router-dom";
import menu from "../../assets/images/menu.png";
import cancel from "../../assets/images/cancel.png";
import help from "../../assets/images/help.png";
import user from "../../assets/images/user.png";
import calendar from "../../assets/images/calendar.png";
import bell from "../../assets/images/bell.png";
import exit from "../../assets/images/exit.png";
import user1 from "../../assets/images/user1.png";
import { Link } from "react-router-dom";




function Header() {
    // const navigate = useNavigate()
    // const [click, setClick] = useState(false);

    // const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);

    return (
        <div className="Header1">
                <div className="logo1">
                    <img src={user1} className="logo" />
                </div>
            </div>
    );
}
export default Header;