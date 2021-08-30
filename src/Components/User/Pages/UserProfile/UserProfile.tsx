import UserProfileComponent from 'Components/User/Global/UserProfileComponent/UserProfileComponent';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router"
import IPersonData from 'Utils/Types/IPersonData';
import getUserProfileData from './Functions/getUserProfileData';
// import defaultUserData from '../../../../Utils/Defaults/defaultUserData.json';
import IUserProfile from './Types/IUserProfile';

const UserProfile = (): JSX.Element => {
    const { id } = useParams<IUserProfile>();
    const [userProfileData, setUserProfileData] = useState<IPersonData | null>(null);

    useEffect(() => {
        const getUserData = async () => {
            const { isSuccess, userData } = await getUserProfileData(id);

            if (isSuccess)
                return setUserProfileData(userData);

            return null;
        }

        getUserData();
    }, [id])

    if (!userProfileData)
        return <h1>TUTAJ TEMPLATE DODAC</h1>

    return <UserProfileComponent personData={userProfileData} />
}

export default UserProfile