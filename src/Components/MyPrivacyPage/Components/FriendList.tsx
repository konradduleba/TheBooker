import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import GenerateInfoAndEditForm from './GenerateInfoAndEditForm';
import ISeeFuturePosts from '../Types/ISeeFuturePosts';
import IInfoAndEditData from '../Types/IInfoAndEditData';
import IPrivacyInfo from '../../../GlobalTypes/IPersonData/IPrivacyInfo';
import EBackendFieldNames from '../Database/EBackendFieldNames';

const validationSchema = yup.object().shape({
    option: yup.string().required("Option is required")
});

const FriendList = (privacyInfo: IPrivacyInfo): JSX.Element => {
    const { register, handleSubmit, errors } = useForm<ISeeFuturePosts>({ resolver: yupResolver(validationSchema) });
    const { friendList } = privacyInfo;

    const infoAndEditData: IInfoAndEditData = {
        info: {
            label: 'Who can see your friend list?',
            value: friendList,
            key: EBackendFieldNames.FRIEND_LIST
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

export default FriendList;