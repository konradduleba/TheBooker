import React, { useEffect, useState } from 'react';
import testInvites from './testInvites';
import './Styles/GlobalPage.scss';
import DisplayRandomPeople from '../../../Global/DisplayRandomPeople/DisplayRandomPeople';
import IInviteList from '../../../Global/DisplayRandomPeople/Types/IInviteList';
import HeaderMeta from '../../../Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../../../Global/Section/Section';

const GlobalPage = (): JSX.Element => {
    const [friendsRequests, setFriendsRequests] = useState<IInviteList[]>([]);

    useEffect(() => setFriendsRequests(testInvites), []);

    return (
        <SectionComponent header='Random People all around the World'>
            <HeaderMeta title='Global' />
            <div className='global-page-wrapper column-with-padding'>
                <DisplayRandomPeople inviteList={friendsRequests} />
            </div>
        </SectionComponent>
    )
};

export default GlobalPage;