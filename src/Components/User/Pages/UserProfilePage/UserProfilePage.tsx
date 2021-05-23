import React from 'react';
import { useParams } from "react-router"
// import defaultUserData from '../../../../Utils/Defaults/defaultUserData.json';
import IUserProfilePage from './Types/IUserProfilePage';

const UserProfilePage = (): JSX.Element => {
    const { id } = useParams<IUserProfilePage>();
    console.log(id);

    // return <UserProfile personData={defaultUserData} />

    return <h1>EST</h1>
}

export default UserProfilePage