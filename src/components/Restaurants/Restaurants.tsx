import React from 'react';
import classes from './Restaurants.module.scss'
import {useAppSelector} from "../../store/redux-hooks";
import ListItem from "./ListItem/ListItem";
import restaurant1 from './images/restaurant1.png'
import restaurant2 from './images/restaurant2.png'

const Restaurants = () => {

    const {restaurants} = useAppSelector(state => state)

    return (
        <section className={classes.restaurants}>
            <div className="content">
                <div className={classes.wrapper}>
                    <div className={classes.restaurantsList}>
                        {restaurants.map((restaurant, index) => <ListItem key={index} title={restaurant.title} street={restaurant.street} name={restaurant.name} />)}
                    </div>

                    <div className={classes.previewPhoto}>
                        <img src={restaurant1} alt=""/>
                        <img src={restaurant2} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Restaurants;