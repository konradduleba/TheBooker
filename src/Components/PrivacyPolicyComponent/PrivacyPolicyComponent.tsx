import React from 'react';
import SectionComponent from '../GlobalComponents/SectionComponent';
import './PrivacyPolicyComponent.scss';
import privacyPolicy from '../../Utils/privacyPolicy.json';
import GenerateMultipleSections from '../GlobalComponents/GenerateMultipleSections';

const PrivacyPolicyComponent = (): JSX.Element => (
    <SectionComponent header="Thefacebook Privacy Policy">
        <div className='privacy-policy-wrapper'>
            <h1>[ Privacy Policy ]</h1>
            <GenerateMultipleSections listOfSections={Object.values(privacyPolicy)} />
        </div>
    </SectionComponent>
);

export default PrivacyPolicyComponent;