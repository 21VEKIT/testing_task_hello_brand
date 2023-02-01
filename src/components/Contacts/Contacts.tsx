import React from 'react';
import classes from './Contacts.module.scss'
import time_icon from './images/oclock_icon.svg'
import email_icon from './images/email_icon.svg'
import gallery_icon from './images/gallery_icon.svg'
import phone_icon from './images/phone_icon.png'
import ContactItem from "./ContactItem/ContactItem";
import Form from "./Form/Form";

const Contacts = () => {
    return (
        <section className={classes.contacts}>
            <div className="content">
                <div className={classes.wrapper}>

                    <div className={classes.body}>
                        <div className={classes.title}>Contacts</div>

                        <div className={classes.items}>

                            <ContactItem title={'Phone Number'} description={'+32 9 282 57 25'} photo={phone_icon} />

                            <ContactItem title={'Email'} description={'info@email.com'} photo={email_icon} />

                            <ContactItem title={'Opening Hours'} description={'Everyday from 6 AM - 9 PM'} photo={time_icon} />

                            <ContactItem title={'Map Street'} description={'Jl. Raya Surabaya 2787'} photo={gallery_icon} />

                        </div>
                    </div>

                    <div className={classes.form}>
                        <div className={classes.title}>have any questions?</div>

                        <Form />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;