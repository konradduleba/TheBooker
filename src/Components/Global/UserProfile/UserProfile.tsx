import React from 'react';
import SectionComponent from '../../Global/Section/Section';
import ConnectionComponent from './Components/ConnectionComponent';
import FriendListComponent from '../../Global/FriendList/FriendList';
import MutualFriendsComponent from './Components/MutualFriendsComponent';
import './Styles/UserProfile.scss';
import PictureComponent from './Components/PictureComponent';
import SendMessageOrPoke from './Components/SendMessageOrPoke';
import UserInfoComponent from './Components/UserInfoComponent';
import HeaderMeta from '../../Global/HeaderMeta/HeaderMeta';
import IUserProfile from './Types/IUserProfile';

const UserProfile = ({ personData }: IUserProfile): JSX.Element => {
    const { accountInfo } = personData;
    const { name, lastName } = accountInfo;

    const sectionHeader = `${name} ${lastName} profile`;

    return (
        <SectionComponent header={sectionHeader}>
            <HeaderMeta title={sectionHeader} />
            <div className='user-profile-page-wrapper column-with-padding'>
                <div className='left-side'>
                    <PictureComponent {...accountInfo} />
                    <SendMessageOrPoke {...accountInfo} />
                    <ConnectionComponent />
                    <MutualFriendsComponent {...accountInfo} />
                    <FriendListComponent limit={4} accountInfo={accountInfo} />
                </div>
                <div className='right-side'>
                    <UserInfoComponent {...personData} />
                </div>
            </div>
        </SectionComponent>
    )
};
export default UserProfile;