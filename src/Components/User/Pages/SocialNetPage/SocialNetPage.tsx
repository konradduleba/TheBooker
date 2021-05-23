import React, { useState } from 'react';
import GenerateRandomUsers from './Components/GenerateRandomUsers';
import GenerateInfoAndEditForm from './Components/GenerateInfoAndEditForm';
import './Styles/SocialNetPage.scss';
import HeaderMeta from '../../../Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../../../Global/Section/Section';

const SocialNetPage = (): JSX.Element => {
    const [friendsLimit, setFriendsLimit] = useState<number>(10);
    const sectionHeader = 'Searched for all people in your social network';

    return (
        <SectionComponent header={sectionHeader}>
            <HeaderMeta title="Social Network" />
            <div className='social-net-page-wrapper'>
                <div className='displaying-info'>
                    <GenerateInfoAndEditForm setFriendsLimit={setFriendsLimit} friendsLimit={friendsLimit} />
                </div>
                <GenerateRandomUsers limit={friendsLimit} />
            </div>
        </SectionComponent>
    )
}

export default SocialNetPage;