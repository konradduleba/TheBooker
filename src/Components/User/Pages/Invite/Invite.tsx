import React, { useEffect, useState } from 'react';
import './Styles/InvitePage.scss';
import DisplayRandomPeople from '../../../Global/DisplayRandomPeople/DisplayRandomPeople';
import HeaderMeta from '../../../Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../../../Global/Section/Section';
import getInviteList from './Functions/getInviteList';
import IRandomPerson from 'Components/Global/FriendList/Types/IRandomPerson';
import acceptFriendInvite from 'Components/Global/DisplayRandomPeople/Functions/acceptFriendInvite';

const Invite = (): JSX.Element => {
    const [friendsRequests, setFriendsRequests] = useState<IRandomPerson[]>([]);
    const [lastAddedUser, setLastAddedUser] = useState<string>('');

    const handleFriendAcception = async (username: string) => {
        const response = await acceptFriendInvite(username);

        if (!response)
            return null;

        const { isSuccess } = response;

        if (!isSuccess)
            return null;

        return setLastAddedUser(username);
    }

    useEffect(() => {
        const getIncomingInviteLists = async () => {
            const inviteList = await getInviteList();

            return setFriendsRequests(inviteList)
        };

        getIncomingInviteLists();
    }, [lastAddedUser])

    return (
        <SectionComponent header='People that send you friend request'>
            <HeaderMeta title='Invite' />
            <div className='invite-page-wrapper column-with-padding'>
                <DisplayRandomPeople inviteList={friendsRequests} acceptInvite={username => handleFriendAcception(username)} />
            </div>
        </SectionComponent>
    )
};

export default Invite;