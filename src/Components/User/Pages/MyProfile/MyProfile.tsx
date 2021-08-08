import React, { useEffect, useState } from 'react';
import IPersonData from '../../../../Utils/Types/IPersonData';
import UserProfileTemplate from '../../../Global/Templates/UserProfileTemplate';
import UserProfile from '../../Global/UserProfileComponent/UserProfileComponent';
import getMyUserData from './Functions/getMyUserData';

const MyProfile = (): JSX.Element => {
    const [userData, setUserData] = useState<IPersonData | null>(null);

    useEffect(() => {
        const getUserData = async () => {
            const { isSuccess, userData } = await getMyUserData();

            if (isSuccess)
                return setUserData(userData);

            return null;
        }

        getUserData();
    }, [])

    if (!userData)
        return <UserProfileTemplate />

    return (
        <UserProfile personData={userData} isThatMe={true} />
    )
};
export default MyProfile;