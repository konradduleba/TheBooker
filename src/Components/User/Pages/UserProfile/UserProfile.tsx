import React from 'react';
import { useParams } from "react-router"
// import defaultUserData from '../../../../Utils/Defaults/defaultUserData.json';
import IUserProfile from './Types/IUserProfile';

const UserProfile = (): JSX.Element => {
    const { id } = useParams<IUserProfile>();
    console.log(id);

    // return <UserProfile personData={defaultUserData} />

    return <h1>EST</h1>
}

export default UserProfile