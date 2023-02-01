import React, {FC} from 'react';
import classes from "../Menu.module.scss";
import {IMenu} from "../../../types/IMenu";

const MenuItem:FC<IMenu> = ({title, description, photo}) => {
    return (
        <div className={classes.item}>
            <div>
                <div className={classes.title}>{title}</div>
                <div className={classes.description}>{description}</div>
            </div>

            <img src={photo} alt=""/>
        </div>
    );
};

export default MenuItem;