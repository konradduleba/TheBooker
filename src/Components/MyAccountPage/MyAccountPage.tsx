import React from 'react';
import HeaderMeta from '../Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../Global/Section/Section';
import UserCredentials from './Components/UserCredentials';
import './Styles/MyAccountPage.scss';

const MyAccountPage = (): JSX.Element => {
    const sectionHeader = 'My Account';

    return (
        <SectionComponent header={sectionHeader}>
            <HeaderMeta title={sectionHeader} />
            <div className='my-account-page-wrapper'>
                <UserCredentials />
            </div>
        </SectionComponent>
    )
};

export default MyAccountPage;