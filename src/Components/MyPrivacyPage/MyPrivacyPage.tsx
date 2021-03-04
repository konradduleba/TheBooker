import React from 'react';
import HeaderMeta from '../Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../Global/Section/Section';
import Following from './Components/Following';
import FriendRequest from './Components/FriendRequest';
import SeeFuturePosts from './Components/SeeFuturePosts';
import FriendList from './Components/FriendList';
import './Styles/MyPrivacyPage.scss';
import Tag from './Components/Tag';
import EmailAddress from './Components/EmailAddress';
import PhoneNumber from './Components/PhoneNumber';

const MyPrivacyPage = (): JSX.Element => {
    const sectionHeader = 'My Privacy';

    return (
        <SectionComponent header={sectionHeader}>
            <HeaderMeta title={sectionHeader} />
            <div className='my-privacy-page-wrapper'>
                <SeeFuturePosts />
                <Following />
                <FriendRequest />
                <FriendList />
                <Tag />
                <PhoneNumber />
                <EmailAddress />
            </div>
        </SectionComponent>
    )
};

export default MyPrivacyPage;