import React from 'react';
import HeaderMeta from '../Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../Global/Section/Section';
import Following from './Components/Following';
import SeeFuturePosts from './Components/SeeFuturePosts';
import './Styles/MyPrivacyPage.scss';

const MyPrivacyPage = (): JSX.Element => {
    const sectionHeader = 'My Privacy';

    return (
        <SectionComponent header={sectionHeader}>
            <HeaderMeta title={sectionHeader} />
            <div className='my-privacy-page-wrapper'>
                <SeeFuturePosts />
                <Following />
            </div>
        </SectionComponent>
    )
};

export default MyPrivacyPage;