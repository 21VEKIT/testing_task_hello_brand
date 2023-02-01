import React from 'react';
import classes from './Menu.module.scss'
import {useAppSelector} from "../../store/redux-hooks";
import MenuItem from "./MenuItem/MenuItem";

const Menu = () => {

    const {menu} = useAppSelector(state => state)

    return (
        <section className={classes.menu}>
            <div className="content">
                <div className={classes.wrapper}>

                    {menu.map((menu, index) => <MenuItem key={index} title={menu.title} description={menu.description} photo={menu.photo} />)}

                </div>
            </div>
        </section>
    );
};

export default Menu;