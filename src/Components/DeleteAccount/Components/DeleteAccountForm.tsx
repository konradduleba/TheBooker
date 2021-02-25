import React from 'react';
import IDeleteAccount from '../Types/IDeleteAccount';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const validationSchema = yup.object().shape({
    password: yup.string()
        .required("Password is required")
        .min(8, "Password have to contain minimum 8 characters")
        .max(40, "Password have to contain maximum 40 characters")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!#%*?&]{8,40}/i, "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"),
});

const DeleteAccountForm = (): JSX.Element => {
    const { register, handleSubmit, errors } = useForm<IDeleteAccount>({ resolver: yupResolver(validationSchema) });

    const onSubmit = (data: IDeleteAccount) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='password-container'>
                <div>
                    <label>Current Password:</label>
                    <input name="password" type="password" ref={register} className='field-input'></input>
                </div>
                {errors.password && <p className='error'>{errors.password.message}</p>}
            </div>
            <div>
                <input type="submit" value="Delete Account" className='delete-input' />
            </div>
        </form>
    )
}

export default DeleteAccountForm;