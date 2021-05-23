import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import IDeactivateAccount from '../Types/IDeactivateAccount';
import deactivateUser from '../Functions/deactivateUser';
import { UserData } from '../../../../../Contexts/UserDataContext/UserData';

const validationSchema = yup.object().shape({
    numberOfDays: yup.string()
        .required("Suspention option is required"),
    currentPassword: yup.string()
        .required("Password is required")
        .min(8, "Password have to contain minimum 8 characters")
        .max(40, "Password have to contain maximum 40 characters")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@$!#%*?&]{8,40}/i, "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"),
});

const DeactivateAccountForm = (): JSX.Element => {
    const { logoutUser } = useContext(UserData);
    const { register, handleSubmit, errors } = useForm<IDeactivateAccount>({ resolver: yupResolver(validationSchema) });

    const onSubmit = async (data: IDeactivateAccount) => {
        const { numberOfDays, currentPassword } = data;

        const formData = {
            numberOfDays: Number(numberOfDays),
            currentPassword
        };

        const { isSuccess } = await deactivateUser(formData);

        if (isSuccess && logoutUser)
            return logoutUser();

        return null;
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='options-container'>
                <p>Select time period of Suspension:</p>
                <div className='option-content'>
                    <input type="radio" id="one_month" name="numberOfDays" value={30} ref={register} defaultChecked />
                    <label htmlFor="one_month">One Month</label>
                </div>
                <div className='option-content'>
                    <input type="radio" id="three_months" name="numberOfDays" value={90} ref={register} />
                    <label htmlFor="three_months">Three Months</label>
                </div>
                <div className='option-content'>
                    <input type="radio" id="six_months" name="numberOfDays" value={180} ref={register} />
                    <label htmlFor="six_months">Six Months</label>
                </div>
                {errors.numberOfDays && <p className='error'>{errors.numberOfDays.message}</p>}
            </div>
            <div className='password-container'>
                <div>
                    <label>Current Password:</label>
                    <input name="currentPassword" type="password" ref={register} className='field-input'></input>
                </div>
                {errors.currentPassword && <p className='error'>{errors.currentPassword.message}</p>}
            </div>
            <div>
                <input type="submit" value="Deactivate Account" className='deactivate-input' />
            </div>
        </form >
    )
}

export default DeactivateAccountForm;