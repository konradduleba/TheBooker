import React from 'react';
import SectionComponent from '../GlobalComponents/SectionComponent';
import './PrivacyPolicyComponent.scss';
import { defaultWindowWidth } from '../../Utils/appSettings';
import privacyPolicy from '../../Utils/privacyPolicy.json';

interface PrivacyTypes {
    title: string;
    description: string;
}

const PrivacyPolicyComponent = (): JSX.Element => (
    <SectionComponent header="Thefacebook Privacy Policy">
        <div className='privacy-policy-wrapper'>
            <h1>[ Privacy Policy ]</h1>
            {Object.values(privacyPolicy).map(({ title, description }: PrivacyTypes) => (
                <SectionComponent
                    header={title}
                    style={{ width: defaultWindowWidth, marginBottom: "20px" }}
                    key={title}>
                    <div dangerouslySetInnerHTML={{ __html: `${description}` }}></div>
                </SectionComponent>
            ))}
        </div>
    </SectionComponent>
);

export default PrivacyPolicyComponent;