import React from 'react';
// import { UserData } from '../../../../Contexts/UserDataContext/UserData';
import HeaderMeta from '../../../Global/HeaderMeta/HeaderMeta';
import './Styles/MyFriends.scss';

const MyFriendsComponent = (): JSX.Element => {
    // const { userData } = useContext(UserData);
    // const { accountInfo } = userData?.userData ? userData.userData : defaultUserData;

    return (
        <section className='my-friends-wrapper section-component'>
            <HeaderMeta title='My Friends' />
            {/* <FriendListComponent accountInfo={accountInfo} /> */}
        </section>
    )
}


export default MyFriendsComponent;