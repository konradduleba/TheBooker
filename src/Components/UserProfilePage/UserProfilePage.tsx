import React from 'react';
import { useParams } from "react-router"
import UserProfile from "../Global/UserProfile/UserProfile"
import IUserProfilePage from "./Types/IUserProfilePage";
import defaultUserData from '../../Utils/defaultUserData.json';

const UserProfilePage = (): JSX.Element => {
    const { id } = useParams<IUserProfilePage>();
    console.log(id);

    return <UserProfile personData={defaultUserData} />
}

export default UserProfilePage