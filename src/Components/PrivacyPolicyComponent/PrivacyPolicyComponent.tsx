import React from 'react';
import SectionComponent from '../GlobalComponents/SectionComponent';
import './PrivacyPolicyComponent.scss';
import privacyPolicy from '../../Utils/privacyPolicy.json';
import GenerateMultipleSections from '../GlobalComponents/GenerateMultipleSections';
import HeaderMeta from '../GlobalComponents/HeaderMeta';
import { privacyMeta } from '../../Utils/headerMeta.json';
import ScrollToTopOnMount from '../GlobalComponents/ScrollToTopOnMount';

const PrivacyPolicyComponent = (): JSX.Element => (
    <SectionComponent header="TheBooker Privacy Policy">
        <ScrollToTopOnMount />
        <div className='privacy-policy-wrapper'>
            <HeaderMeta title={privacyMeta.title} />
            <h1>[ Privacy Policy ]</h1>
            <GenerateMultipleSections listOfSections={Object.values(privacyPolicy)} />
        </div>
    </SectionComponent>
);

export default PrivacyPolicyComponent;