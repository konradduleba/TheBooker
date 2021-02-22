import React, { useContext } from 'react';
import SectionComponent from '../Global/Section/Section';
import ConnectionComponent from './Components/ConnectionComponent';
import FriendListComponent from '../Global/FriendList/FriendList';
import MutualFriendsComponent from './Components/MutualFriendsComponent';
import './Styles/MyProfilePage.scss';
import PictureComponent from './Components/PictureComponent';
import SendMessageOrPoke from './Components/SendMessageOrPoke';
import UserInfoComponent from './Components/UserInfoComponent';
import { UserData } from '../../Authentication/UserDataContext/UserDataContext';
import defaultUser from '../../Utils/defaultUserData.json';
import HeaderMeta from '../Global/HeaderMeta/HeaderMeta';
import createSectionHeader from './Functions/createSectionHeader';

const MyProfilePageComponent = (): JSX.Element => {
    const { userData } = useContext(UserData);
    const accountData = userData?.userData ? userData.userData.accountInfo : defaultUser.accountInfo;
    const defaultUserData = userData?.userData ? userData?.userData : defaultUser;

    const userInfo = userData?.userData ? userData.userData : defaultUser;

    const sectionHeader = createSectionHeader(userInfo);

    return (
        <SectionComponent header={sectionHeader}>
            <HeaderMeta title={sectionHeader} />
            <div className='my-profile-page-wrapper column-with-padding'>
                <div className='left-side'>
                    <PictureComponent {...accountData} />
                    <SendMessageOrPoke {...accountData} />
                    <ConnectionComponent />
                    <MutualFriendsComponent {...accountData} />
                    <FriendListComponent limit={4} />
                </div>
                <div className='right-side'>
                    <UserInfoComponent {...defaultUserData} />
                </div>
            </div>
        </SectionComponent>
    )
};
export default MyProfilePageComponent;