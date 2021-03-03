import React from 'react';
import SectionComponent from '../Global/Section/Section';
import './Styles/PrivacyPolicy.scss';
import privacyPolicy from '../../Utils/privacyPolicy.json';
import GenerateMultipleSections from '../Global/GenerateMultipleSections/GenerateMultipleSections';
import HeaderMeta from '../Global/HeaderMeta/HeaderMeta';
import { privacyMeta } from '../../Utils/headerMeta.json';
import ScrollToTopOnMount from '../Global/ScrollToTopOnMount/ScrollToTopOnMount';

const PrivacyPolicyComponent = (): JSX.Element => (
    <SectionComponent header="TheBooker Privacy Policy">
        <ScrollToTopOnMount />
        <div className='privacy-policy-wrapper column-with-padding'>
            <HeaderMeta title={privacyMeta.title} />
            <h1 className='header'>[ Privacy Policy ]</h1>
            <GenerateMultipleSections listOfSections={Object.values(privacyPolicy)} />
        </div>
    </SectionComponent>
);

export default PrivacyPolicyComponent;