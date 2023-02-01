import React, {FC} from 'react';
import classes from "../Contacts.module.scss";

interface IProps {
    title: string
    description: string
    photo: string
}

const ContactItem:FC<IProps> = ({title, description, photo}) => {
    return (
        <div className={classes.item}>
            <div className={classes.icon}>
                <img src={photo} alt=""/>
            </div>

            <div className={classes.info}>
                <div className={classes.title}>{title}</div>
                <div className={classes.description}>{description}</div>
            </div>
        </div>
    );
};

export default ContactItem;