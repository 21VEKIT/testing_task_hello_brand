import React, {useState} from 'react';
import classes from './Main.module.scss'
import {TextField} from "@mui/material";
import {motion} from 'framer-motion'

const Main = () => {

    const [modal, setModal] = useState<boolean>(false)

    return (
        <>
            <div className={classes.main}>
                <motion.div
                    initial={{
                        x: -1000
                    }}
                    animate={{
                        x: 0
                    }}
                    transition={{
                        duration: 0.5
                    }}
                    className={classes.description}>OPEN EVERYDAY 6AM - 9PM
                </motion.div>
                <motion.div
                    initial={{
                        x: 1000
                    }}
                    animate={{
                        x: 0
                    }}
                    transition={{
                        duration: 0.5
                    }}
                    className={classes.title}>A bad day with lunch is better than a good day without it.</motion.div>

                <div className={classes.buttons}>
                    <button onClick={() => setModal(true)}>Reserve a table</button>

                    <div className={classes.items}>
                        <motion.div
                            initial={{
                                y: -1000
                            }}
                            animate={{
                                y: 0
                            }}
                            transition={{
                                delay: 1
                            }}
                        >Fb</motion.div>
                        <motion.div
                            initial={{
                                y: -1000
                            }}
                            animate={{
                                y: 0
                            }}
                            transition={{
                                delay: 1.2
                            }}
                        >Ig</motion.div>
                        <motion.div
                            initial={{
                                y: -1000
                            }}
                            animate={{
                                y: 0
                            }}
                            transition={{
                                delay: 1.4
                            }}
                        >Tw</motion.div>
                        <motion.div
                            initial={{
                                y: -1000
                            }}
                            animate={{
                                y: 0
                            }}
                            transition={{
                                delay: 1.6
                            }}
                        >Yt</motion.div>
                    </div>
                </div>
            </div>

            {modal && <div className={classes.modal}>
                <div className={classes.close} onClick={() => setModal(false)}>+</div>
                <div className={classes.text}>
                    <TextField label={'Имя'} fullWidth={true}/>
                </div>

                <div className={classes.text}>
                    <TextField label={'Email'} fullWidth={true}/>
                </div>

                <div className={classes.text}>
                    <TextField label={'Описание'} fullWidth={true}/>
                </div>

                <button>Отправить</button>
            </div>}
        </>
    );
};

export default Main;