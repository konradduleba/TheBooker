import React, { useContext } from 'react';
import IDeleteAccount from '../Types/IDeleteAccount';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import deactivateUser from '../../DeactivateAccount/Functions/deactivateUser';
import { UserData } from '../../../../../Contexts/UserDataContext/UserData';

const validationSchema = yup.object().shape({
    currentPassword: yup.string()
        .required("Password is required")
        .min(8, "Password have to contain minimum 8 characters")
        .max(40, "Password have to contain maximum 40 characters")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!#%*?&]{8,40}/i, "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"),
});

const DeleteAccountForm = (): JSX.Element => {
    const { logoutUser } = useContext(UserData);
    const { register, handleSubmit, errors } = useForm<IDeleteAccount>({ resolver: yupResolver(validationSchema) });

    const onSubmit = async (data: IDeleteAccount) => {
        const { currentPassword } = data;

        const formData = {
            numberOfDays: 9999,
            currentPassword
        };

        const { isSuccess } = await deactivateUser(formData);

        if (isSuccess && logoutUser)
            return logoutUser();

        return null;
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='password-container'>
                <div>
                    <label>Current Password:</label>
                    <input name="currentPassword" type="password" ref={register} className='field-input'></input>
                </div>
                {errors.currentPassword && <p className='error'>{errors.currentPassword.message}</p>}
            </div>
            <div>
                <input type="submit" value="Delete Account" className='delete-input' />
            </div>
        </form>
    )
}

export default DeleteAccountForm;