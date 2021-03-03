import React from 'react';
import FriendListComponent from '../Global/FriendList/FriendList';
import HeaderMeta from '../Global/HeaderMeta/HeaderMeta';
import './Styles/MyFriends.scss';

const MyFriendsComponent = (): JSX.Element => (
    <section className='my-friends-wrapper section-component'>
        <HeaderMeta title='My Friends' />
        <FriendListComponent />
    </section>
);

export default MyFriendsComponent;