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

const UserProfileComponent = ({ personData, isThatMe, isTemplate }: IUserProfile): JSX.Element => {
    const { accountInfo, isOnFriendList, isThatMyProfile, inviteStatus, mutualFriendsNumber, canSendFriendRequest } = personData;

    const isMyProfile = isThatMe ? isThatMe : isThatMyProfile

    const sectionHeader = validateSectionHeader(isMyProfile, accountInfo);

    const header = <EditMyProfileButton header={sectionHeader} isThatMe={isMyProfile} />

    return (
        <SectionComponent header={header} className={isTemplate ? 'template' : ''}>
            <HeaderMeta title={sectionHeader} />
            <div className='user-profile-page-wrapper column-with-padding'>
                <div className='left-side'>
                    <PictureComponent {...accountInfo} />
                    {canSendFriendRequest && !isMyProfile && <SendMessageOrPoke
                        accountInfo={accountInfo}
                        isOnFriendList={isOnFriendList}
                        inviteStatus={inviteStatus}
                    />}
                    <ConnectionComponent isThatMe={isMyProfile} />
                    {!isMyProfile && <MutualFriendsComponent accountInfo={accountInfo} mutualFriendsNumber={mutualFriendsNumber} />}
                    <FriendListComponent limit={4} accountInfo={accountInfo} isThatMe={isMyProfile} />
                </div>
                <div className='right-side'>
                    <UserInfoComponent {...personData} />
                </div>
            </div>
        </SectionComponent>
    )
};
export default UserProfileComponent;