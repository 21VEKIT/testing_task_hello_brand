import React from 'react';
import classes from './MobileMenu.module.scss'

const MobileMenu = () => {
    return (
        <div className={classes.mobileMenu}>
            <div className={classes.menu}>
                <div>À la carte</div>
                <div>Wijnkaart</div>
                <div>Lunchmenu</div>
                <div>Contact</div>
            </div>
        </div>
    );
};

export default MobileMenu;