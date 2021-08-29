import React, { useEffect, useState } from 'react';
import './Styles/InvitePage.scss';
import DisplayRandomPeople from '../../../Global/DisplayRandomPeople/DisplayRandomPeople';
import HeaderMeta from '../../../Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../../../Global/Section/Section';
import getInviteList from './Functions/getInviteList';
import IRandomPerson from 'Components/Global/FriendList/Types/IRandomPerson';
import acceptFriendInvite from 'Components/Global/DisplayRandomPeople/Functions/acceptFriendInvite';
import removeInviteRequest from './Functions/removeInviteRequest';

const Invite = (): JSX.Element => {
    const [friendsRequests, setFriendsRequests] = useState<IRandomPerson[]>([]);
    const [lastAddedUser, setLastAddedUser] = useState<string>('');
    const [lastRemovedInvite, setlastRemovedInvite] = useState<string>('');

    const handleFriendAcception = async (username: string) => {
        const response = await acceptFriendInvite(username);

        if (!response)
            return null;

        const { isSuccess } = response;

        if (!isSuccess)
            return null;

        return setLastAddedUser(username);
    }

    const handleRemoveInvite = async (username: string) => {
        const response = await removeInviteRequest(username);

        if (!response)
            return null;

        const { isSuccess } = response;

        if (!isSuccess)
            return null;

        return setlastRemovedInvite(username);
    }

    useEffect(() => {
        const getIncomingInviteLists = async () => {
            const inviteList = await getInviteList();

            return setFriendsRequests(inviteList)
        };

        getIncomingInviteLists();
    }, [lastAddedUser, lastRemovedInvite])

    return (
        <SectionComponent header='People that send you friend request'>
            <HeaderMeta title='Invite' />
            <div className='invite-page-wrapper column-with-padding'>
                <DisplayRandomPeople
                    inviteList={friendsRequests}
                    acceptInvite={username => handleFriendAcception(username)}
                    removeInvite={username => handleRemoveInvite(username)}
                />
            </div>
        </SectionComponent>
    )
};

export default Invite;