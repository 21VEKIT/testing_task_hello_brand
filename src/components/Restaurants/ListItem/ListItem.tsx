import React, {FC} from 'react';
import classes from "../Restaurants.module.scss";
import {IRestaurants} from "../../../types/IRestaurants";

const ListItem:FC<IRestaurants> = ({title, street, name}) => {
    return (
        <div className={classes.listElement}>
            <div className={classes.title}>{title}</div>
            <div className={classes.description}>
                <div>{street}</div>
                <div>
                    <span></span><span></span><span></span>
                </div>
                <div>{name}</div>
            </div>
        </div>
    );
};

export default ListItem;