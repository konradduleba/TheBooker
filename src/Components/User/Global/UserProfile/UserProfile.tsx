import React from 'react';
import SectionComponent from '../../../Global/Section/Section';
import ConnectionComponent from './Components/ConnectionComponent';
import FriendListComponent from '../../../Global/FriendList/FriendList';
import MutualFriendsComponent from './Components/MutualFriendsComponent';
import './Styles/UserProfile.scss';
import PictureComponent from './Components/PictureComponent';
import SendMessageOrPoke from './Components/SendMessageOrPoke';
import UserInfoComponent from './Components/UserInfoComponent';
import HeaderMeta from '../../../Global/HeaderMeta/HeaderMeta';
import IUserProfile from './Types/IUserProfile';
import validateSectionHeader from './Functions/validateSectionHeader';
import EditMyProfileButton from './Components/EditMyProfileButton';

const UserProfile = ({ personData, isThatMe, isTemplate }: IUserProfile): JSX.Element => {
    const { accountInfo } = personData;

    const sectionHeader = validateSectionHeader(isThatMe, accountInfo);

    const header = <EditMyProfileButton header={sectionHeader} isThatMe={isThatMe} />

    return (
        <SectionComponent header={header} className={isTemplate ? 'template' : ''}>
            <HeaderMeta title={sectionHeader} />
            <div className='user-profile-page-wrapper column-with-padding'>
                <div className='left-side'>
                    <PictureComponent {...accountInfo} />
                    {!isThatMe && <SendMessageOrPoke {...accountInfo} />}
                    <ConnectionComponent isThatMe={isThatMe} />
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