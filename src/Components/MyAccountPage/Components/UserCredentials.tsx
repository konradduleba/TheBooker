import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserData } from '../../../Authentication/UserDataContext/UserDataContext';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import defaultUser from '../../../Utils/defaultUserData.json';
import IUserCredentails from '../Types/IUserCredentials';
import IInfoAndEditData from '../Types/IInfoAndEditData';
import GenerateInfoAndEditForm from './GenerateInfoAndEditForm';

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
    const { register, handleSubmit, errors } = useForm<IUserCredentails>({ resolver: yupResolver(validationSchema) });
    const { userData } = useContext(UserData);
    const { accountInfo } = userData?.userData ? userData.userData : defaultUser;
    const { name, lastName } = accountInfo;

    const infoAndEditData: IInfoAndEditData = {
        info: {
            label: 'Name',
            value: `${name} ${lastName}`
        },
        form: {
            handleSubmit: handleSubmit,
            fields: [{
                label: 'First Name:',
                name: 'firstName',
                type: 'text',
                ref: register,
                error: errors.firstName
            },
            {
                label: 'Last Name:',
                name: 'lastName',
                type: 'text',
                ref: register,
                error: errors.lastName
            }]
        }
    }

    return <GenerateInfoAndEditForm infoAndEditData={infoAndEditData} />
}

export default UserCredentials;