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

const UserProfileComponent = ({ personData, isThatMe, isTemplate }: IUserProfile): JSX.Element => {
    const { accountInfo, isOnFriendList, isThatMyProfile, inviteStatus, mutualFriendsNumber, canSendFriendRequest } = personData;

    const isMyProfile = isThatMe ? isThatMe : isThatMyProfile

    const sectionHeader = validateSectionHeader(isMyProfile, accountInfo);

    return (
        <SectionComponent header={sectionHeader} className={isTemplate ? 'template' : ''}>
            <HeaderMeta title={sectionHeader} />
            <div className='user-profile-page-wrapper column-with-padding'>
                <div className='left-side'>
                    <PictureComponent accountInfo={accountInfo} isMyProfile={isMyProfile} />
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
                    <UserInfoComponent personData={personData} isMyProfile={isMyProfile} />
                </div>
            </div>
        </SectionComponent>
    )
};
export default UserProfileComponent;