import React from 'react';
import SectionComponent from '../GlobalComponents/SectionComponent/SectionComponent';
import './Styles/TermsPageComponent.scss';
import termsOfUse from '../../Utils/termsOfUse.json';
import GenerateMultipleSections from '../GlobalComponents/GenerateMultipleSections/GenerateMultipleSections';
import HeaderMeta from '../GlobalComponents/HeaderMeta/HeaderMeta';
import { termsMeta } from '../../Utils/headerMeta.json';
import ScrollToTopOnMount from '../GlobalComponents/ScrollToTopOnMount/ScrollToTopOnMount';

const TermsPageComponent = (): JSX.Element => (
    <SectionComponent header="TheBooker Terms of Use">
        <div className='terms-of-use-wrapper column-with-padding'>
            <ScrollToTopOnMount />
            <HeaderMeta title={termsMeta.title} />
            <h1 className='header'>[ Terms of Use ]</h1>
            <GenerateMultipleSections listOfSections={Object.values(termsOfUse)} />
        </div>
    </SectionComponent>
);

export default TermsPageComponent;