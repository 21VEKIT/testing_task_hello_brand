import React from 'react';
import Header from "./Header/Header";
import classes from './MainPage.module.scss'
import Main from "./Main/Main";

const MainPage = () => {
    return (
        <section className={classes.main}>
            <div className="content">
                <Header/>
                <Main />
            </div>
        </section>
    );
};

export default MainPage;