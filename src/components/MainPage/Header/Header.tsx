import React, {useState} from 'react';
import classes from './Header.module.scss'
import logo from '../../../images/logo.png'
import phone_icon from './images/phone_icon.svg'
import './Burger.scss'
import MobileMenu from "./MobileMenu/MobileMenu";
import {motion} from 'framer-motion'

const Header = () => {

    const [menuActive, setMenuActive] = useState<boolean>(false)

    return (
        <>
            {menuActive && <MobileMenu />}
            <header className={classes.header}>
                <motion.img
                    initial={{
                        scale: 0
                    }}
                    animate={{
                        rotate: 360,
                        scale: 1
                    }}
                    transition={{
                        duration: 1
                    }}
                    src={logo} className={classes.logo} alt=""/>

                <div className={classes.menu}>
                    <div>À la carte</div>
                    <div>Wijnkaart</div>
                    <div>Lunchmenu</div>
                    <div>Contact</div>
                </div>

                <div className={classes.phone}>
                    <img src={phone_icon} alt=""/>
                    <div className={classes.number}>+32 9 282 57 25</div>
                </div>

                <div className={`${menuActive && 'burger_menu_active'} ${classes.burger}`} onClick={() => setMenuActive(state => !state)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>
        </>
    );
};

export default Header;