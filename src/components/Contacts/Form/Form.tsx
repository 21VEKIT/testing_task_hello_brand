import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IForm} from "../../../types/IForm";
import {Controller} from "react-hook-form";
import {Alert, TextField} from "@mui/material";
import classes from './Form.module.scss'
import {Textarea} from "@mui/joy";
import validator from 'validator'
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const Form = () => {

    const [alert, setAlert] = useState<boolean>(false)

    const {control, handleSubmit, formState: {errors}} = useForm<IForm>(
        {
            mode: "onSubmit",
            defaultValues: {
                name: '',
                email: '',
                request: ''
            }
        }
    )

    console.log(errors)

    const onSubmit = (data: IForm) => {
        console.log(data)

        setAlert(true)

        setTimeout(() => {
            setAlert(false)
        }, 4000)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <div className={classes.data}>
                    <div>
                        <Controller
                            render={({field}) => <TextField helperText={errors.name?.message} fullWidth={true}
                                                            error={errors.name && true} label={'Name'} {...field} />}
                            name={'name'}
                            control={control}
                            rules={{
                                required: 'Обязательное поле'
                            }}
                        />
                    </div>

                    <div>
                        <Controller
                            render={({field}) => <TextField helperText={errors.email?.message}
                                                            error={errors.email && true} fullWidth={true}
                                                            label={'Email'} {...field} />}
                            name={'email'}
                            control={control}
                            rules={{
                                validate: (value) => {
                                    if (validator.isEmail(value.trim()))
                                        return undefined
                                    return 'Введите корректный Email'
                                }
                            }}
                        />
                    </div>
                </div>

                <div className={classes.textarea}>
                    <Controller
                        render={({field}) => <Textarea minRows={3} placeholder={'Speciale Request'} {...field} />}
                        name={'request'}
                        control={control}
                    />
                </div>

                <button>Send</button>
            </form>

            {alert && <div className={classes.alert}>
                <Alert severity="success">Заявка успешно оформлена</Alert>
            </div>}
        </>
    );
};

export default Form;