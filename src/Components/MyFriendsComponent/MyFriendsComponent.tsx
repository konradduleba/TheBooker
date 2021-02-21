import React from 'react';
import FriendListComponent from '../GlobalComponents/FriendListComponent/FriendListComponent';
import HeaderMeta from '../GlobalComponents/HeaderMeta/HeaderMeta';
import './Styles/MyFriendsComponent.scss';

const MyFriendsComponent = (): JSX.Element => (
    <section className='my-friends-wrapper section-component'>
        <HeaderMeta title='My Friends' />
        <FriendListComponent />
    </section>
);

export default MyFriendsComponent;