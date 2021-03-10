import React, { useContext } from 'react';
import { UserData } from '../../Authentication/UserDataContext/UserDataContext';
import defaultUser from '../../Utils/defaultUserData.json';
import UserProfile from '../Global/UserProfile/UserProfile';

const MyProfilePageComponent = (): JSX.Element => {
    const { userData } = useContext(UserData);
    const personData = userData?.userData ? userData.userData : defaultUser;

    return (
        <UserProfile personData={personData} />
    )
};
export default MyProfilePageComponent;