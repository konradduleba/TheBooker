import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserData } from '../../../Authentication/UserDataContext/UserDataContext';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import defaultUser from '../../../Utils/defaultUserData.json';
import GenerateInfoAndEditForm from './GenerateInfoAndEditForm';
import ISeeFuturePosts from '../Types/ISeeFuturePosts';
import IInfoAndEditData from '../Types/IInfoAndEditData';

const validationSchema = yup.object().shape({
    option: yup.string().required("Option is required")
});

const FriendRequest = (): JSX.Element => {
    const { register, handleSubmit, errors } = useForm<ISeeFuturePosts>({ resolver: yupResolver(validationSchema) });
    const { userData } = useContext(UserData);
    const { privacyInfo } = userData?.userData ? userData.userData : defaultUser;
    const { friendRequest } = privacyInfo;

    const infoAndEditData: IInfoAndEditData = {
        info: {
            label: 'Who can send you friend requests?',
            value: friendRequest
        },
        form: {
            handleSubmit: handleSubmit,
            error: errors.option,
            ref: register,
            name: "option",
        }
    }

    return <GenerateInfoAndEditForm infoAndEditData={infoAndEditData} />
}

export default FriendRequest;