import React from 'react';
import mark from '../images/marks.png'
import classes from './Review.module.scss'

const Review = () => {
    return (
        <div className={classes.review}>
            <img className={classes.markPhoto} src={mark} alt=""/>

            <div className={classes.title}>Goede service, lekker eten, toffe ambiance</div>

            <div className={classes.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo  dolores et ea rebum. Stet clita kasd gubergren.</div>

            <div className={classes.author}>ALAIN HEYNDRICKX</div>

        </div>
    );
};

export default Review;