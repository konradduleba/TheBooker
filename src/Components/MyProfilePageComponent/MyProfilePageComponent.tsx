import React, { useContext } from 'react';
import SectionComponent from '../GlobalComponents/SectionComponent';
import ConnectionComponent from './ConnectionComponent';
import FriendListComponent from './FriendListComponent';
import MutualFriendsComponent from './MutualFriendsComponent';
import './MyProfilePageComponent.scss';
import PictureComponent from './PictureComponent';
import SendMessageOrPoke from './SendMessageOrPoke';
import UserInfoComponent from './UserInfoComponent';
import { UserData } from '../../Authentication/UserDataContext';
import defaultUser from '../../Utils/defaultUserData.json';
import HeaderMeta from '../GlobalComponents/HeaderMeta';

const MyProfilePageComponent = (): JSX.Element => {
    const { userData } = useContext(UserData);
    const isThisMe = userData?.userData?.ID === defaultUser.ID ? true : false;
    const accountData = userData?.userData ? userData.userData.accountInfo : defaultUser.accountInfo;
    const defaultUserData = userData?.userData ? userData?.userData : defaultUser;

    const userProfileName = isThisMe ? 'My Profile' : `${userData?.userData?.accountInfo.name} ${userData?.userData?.accountInfo.lastName}'s Profile`;

    return (
        <SectionComponent header={userProfileName}>
            <HeaderMeta title={userProfileName} />
            <div className='my-profile-page-wrapper column-with-padding'>
                <div className='left-side'>
                    <PictureComponent {...accountData} />
                    <SendMessageOrPoke {...accountData} />
                    <ConnectionComponent />
                    <MutualFriendsComponent {...accountData} />
                    <FriendListComponent {...accountData} />
                </div>
                <div className='right-side'>
                    <UserInfoComponent {...defaultUserData} />
                </div>
            </div>
        </SectionComponent>
    )
};
export default MyProfilePageComponent;