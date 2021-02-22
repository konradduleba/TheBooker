import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserData } from '../../../Authentication/UserDataContext/UserDataContext';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import defaultUser from '../../../Utils/defaultUserData.json';
import IUserCredentails from '../Types/IUserCredentials';

const validationSchema = yup.object().shape({
    firstName: yup.string()
        .required("First name is required")
        .min(2, "First name have to contain minimum 2 characters")
        .max(20, "First name have to contain maximum 20 characters"),
    lastName: yup.string()
        .required("Last name is required")
        .min(2, "Last name have to contain minimum 2 characters")
        .max(20, "Last name have to contain maximum 20 characters")
});

const UserCredentials = (): JSX.Element => {
    const [edit, setEdit] = useState<boolean>(false);
    const { register, handleSubmit, errors } = useForm<IUserCredentails>({ resolver: yupResolver(validationSchema) });
    const { userData } = useContext(UserData);
    const { accountInfo } = userData?.userData ? userData.userData : defaultUser;
    const { name, lastName } = accountInfo;

    const onSubmit = (data: IUserCredentails) => {
        console.log(data);
        setEdit(false);
    }

    if (!edit)
        return (
            <div className='info-container'>
                <aside>
                    <p>Name</p>
                    <p>{name} {lastName}</p>
                </aside>
                <button className='normal-button' onClick={() => setEdit(true)}>Edit</button>
            </div>
        )

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='edit-container'>
                <div>
                    <label>First Name:</label>
                    <input name="firstName" type="text" ref={register} className='field-input'></input>
                    {errors.firstName && <p className='error'>{errors.firstName.message}</p>}
                </div>
                <div>
                    <label>Last Name:</label>
                    <input name="lastName" type="text" ref={register} className='field-input'></input>
                    {errors.lastName && <p className='error'>{errors.lastName.message}</p>}
                </div>
            </div>
            <div>
                <input type="submit" value="Save" className='save-input' />
                <button type="button" onClick={() => setEdit(false)}>Cancel</button>
            </div>
        </form>
    )
}

export default UserCredentials;