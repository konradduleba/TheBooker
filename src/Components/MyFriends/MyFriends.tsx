import React, { useContext } from 'react';
import FriendListComponent from '../Global/FriendList/FriendList';
import HeaderMeta from '../Global/HeaderMeta/HeaderMeta';
import './Styles/MyFriends.scss';
import { UserData } from '../../Authentication/UserDataContext/UserDataContext';
import defaultUserData from '../../Utils/defaultUserData.json';

const MyFriendsComponent = (): JSX.Element => {
    const { userData } = useContext(UserData);
    const { accountInfo } = userData?.userData ? userData.userData : defaultUserData;

    return (
        <section className='my-friends-wrapper section-component'>
            <HeaderMeta title='My Friends' />
            <FriendListComponent accountInfo={accountInfo} />
        </section>
    )
}


export default MyFriendsComponent;