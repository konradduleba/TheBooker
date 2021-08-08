import React, { useEffect, useState } from 'react';
import testInvites from './testInvites';
import './Styles/GlobalPage.scss';
import DisplayRandomPeople from '../../../Global/DisplayRandomPeople/DisplayRandomPeople';
import HeaderMeta from '../../../Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../../../Global/Section/Section';
import IRandomPerson from 'Components/Global/FriendList/Types/IRandomPerson';
import acceptFriendInvite from 'Components/Global/DisplayRandomPeople/Functions/acceptFriendInvite';

const Global = (): JSX.Element => {
    const [friendsRequests, setFriendsRequests] = useState<IRandomPerson[]>([]);

    useEffect(() => setFriendsRequests(testInvites), []);

    return (
        <SectionComponent header='Random People all around the World'>
            <HeaderMeta title='Global' />
            <div className='global-page-wrapper column-with-padding'>
                <DisplayRandomPeople inviteList={friendsRequests} acceptInvite={acceptFriendInvite} />
            </div>
        </SectionComponent>
    )
};

export default Global;