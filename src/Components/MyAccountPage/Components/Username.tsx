import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserData } from '../../../Authentication/UserDataContext/UserDataContext';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import defaultUser from '../../../Utils/defaultUserData.json';
import IUsername from '../Types/IUsername';
import IInfoAndEditData from '../Types/IInfoAndEditData';
import GenerateInfoAndEditForm from './GenerateInfoAndEditForm';

const validationSchema = yup.object().shape({
    username: yup.string()
        .required("Username is required")
        .min(2, "Username have to contain minimum 2 characters")
        .max(20, "Username have to contain maximum 30 characters")
});

const Username = (): JSX.Element => {
    const { register, handleSubmit, errors } = useForm<IUsername>({ resolver: yupResolver(validationSchema) });
    const { userData } = useContext(UserData);
    const { accountInfo } = userData?.userData ? userData.userData : defaultUser;
    const { username } = accountInfo;

    const infoAndEditData: IInfoAndEditData = {
        info: {
            label: 'Username',
            value: username
        },
        form: {
            className: 'single-input',
            handleSubmit: handleSubmit,
            fields: [{
                label: 'Username:',
                name: 'username',
                type: 'text',
                ref: register,
                error: errors.username
            }]
        }
    }

    return <GenerateInfoAndEditForm infoAndEditData={infoAndEditData} />
}

export default Username;