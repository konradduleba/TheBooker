import React from 'react';
import GenerateMultipleSections from '../../Components/Global/GenerateMultipleSections/GenerateMultipleSections';
import HeaderMeta from '../../Components/Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../../Components/Global/Section/Section';
import ScrollToTopOnMount from '../../Utils/Functions/ScrollToTopOnMount';
import privacyPolicy from './Utils/privacyPolicy.json';
import './Styles/PrivacyPolicy.scss';

const PrivacyPolicyComponent = (): JSX.Element => (
    <SectionComponent header="TheBooker Privacy Policy">
        <ScrollToTopOnMount />
        <div className='privacy-policy-wrapper column-with-padding'>
            <HeaderMeta title="Privacy Policy" />
            <h1 className='header'>[ Privacy Policy ]</h1>
            <GenerateMultipleSections listOfSections={Object.values(privacyPolicy)} />
        </div>
    </SectionComponent>
);

export default PrivacyPolicyComponent;