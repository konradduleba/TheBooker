import React from 'react';
import SectionComponent from '../GlobalComponents/SectionComponent';
import './TermsPageComponent.scss';
import termsOfUse from '../../Utils/termsOfUse.json';
import GenerateMultipleSections from '../GlobalComponents/GenerateMultipleSections';

const TermsPageComponent = (): JSX.Element => (
    <SectionComponent header="TheBooker Terms of Use">
        <div className='terms-of-use-wrapper'>
            <h1>[ Terms of Use ]</h1>
            <GenerateMultipleSections listOfSections={Object.values(termsOfUse)} />
        </div>
    </SectionComponent>
);

export default TermsPageComponent;