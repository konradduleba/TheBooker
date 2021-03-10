import React, { useEffect, useState } from 'react';
import HeaderMeta from '../Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../Global/Section/Section';
import DisplayFriendsRequests from './Components/DisplayFriendsRequests';
import testInvites from './testInvites';
import IInviteList from './Types/IInviteList';
import './Styles/InvitePage.scss';

const InvitePage = (): JSX.Element => {
    const [friendsRequests, setFriendsRequests] = useState<IInviteList[]>([]);

    useEffect(() => setFriendsRequests(testInvites), [])

    return (
        <SectionComponent header='People that send you friend requests'>
            <HeaderMeta title='Invite' />
            <div className='invite-page-wrapper column-with-padding'>
                <DisplayFriendsRequests inviteList={friendsRequests} />
            </div>
        </SectionComponent>
    )
};

export default InvitePage;