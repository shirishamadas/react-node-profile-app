import React,{useState} from 'react';
import './header.css';

const Header = ({showLoginPage, toShowLogoutBtn, authenticationPage}) => {

    // const [login, setHidden] = useState(true);
    // setHidden(!login) {login? `Login`: 'Logout'}

    return (
    <div>
    <div class="scroll-up-btn">
        <i class="fas fa-angle-up"></i>
    </div>
    <div class="navbar">
        <div class="max-width">
            <div class="logo"><a href="#">Portfolio.</a></div> 
            <ul class="menu">
                <li><a href="#home" class="menu-btn">Home</a></li>
                <li><a href="#about" class="menu-btn">About</a></li>
                <li><a href="#intrests" class="menu-btn">Interests</a></li>
                <li><a href="#skills" class="menu-btn">Skills</a></li>
                <li><a href="#projects" class="menu-btn">Projects</a></li>
                <li><a href="#contact" class="menu-btn">Contact</a></li>
                <li><a href="#login" class="menu-btn"  onClick={() => authenticationPage()}>{showLoginPage ? 'Login':''} {toShowLogoutBtn ? 'Logout':''}</a></li>
            </ul>
        </div>
    </div>
    </div>
    );
}

export default Header;