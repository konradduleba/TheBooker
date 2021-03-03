import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import IDeactivateAccount from '../Types/IDeactivateAccount';

const validationSchema = yup.object().shape({
    date: yup.string()
        .required("Suspention option is required"),
    password: yup.string()
        .required("Password is required")
        .min(8, "Password have to contain minimum 8 characters")
        .max(40, "Password have to contain maximum 40 characters")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!#%*?&]{8,40}/i, "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"),
});

const DeactivateAccountForm = (): JSX.Element => {
    const { register, handleSubmit, errors } = useForm<IDeactivateAccount>({ resolver: yupResolver(validationSchema) });

    const onSubmit = (data: IDeactivateAccount) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='options-container'>
                <p>Select time period of Suspension:</p>
                <div className='option-content'>
                    <input type="radio" id="one_month" name="date" value="one_month" ref={register} defaultChecked />
                    <label htmlFor="one_month">One Month</label>
                </div>
                <div className='option-content'>
                    <input type="radio" id="three_months" name="date" value="three_months" ref={register} />
                    <label htmlFor="three_months">Three Months</label>
                </div>
                <div className='option-content'>
                    <input type="radio" id="six_months" name="date" value="six_months" ref={register} />
                    <label htmlFor="six_months">Six Months</label>
                </div>
                {errors.date && <p className='error'>{errors.date.message}</p>}
            </div>
            <div className='password-container'>
                <div>
                    <label>Current Password:</label>
                    <input name="password" type="password" ref={register} className='field-input'></input>
                </div>
                {errors.password && <p className='error'>{errors.password.message}</p>}
            </div>
            <div>
                <input type="submit" value="Deactivate Account" className='deactivate-input' />
            </div>
        </form >
    )
}

export default DeactivateAccountForm;