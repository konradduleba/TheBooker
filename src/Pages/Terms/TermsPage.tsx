import React from 'react';
import SectionComponent from '../../Components/Global/Section/Section';
import './Styles/TermsPage.scss';
import termsOfUse from './Utils/termsOfUse.json';
import GenerateMultipleSections from '../../Components/Global/GenerateMultipleSections/GenerateMultipleSections';
import HeaderMeta from '../../Components/Global/HeaderMeta/HeaderMeta';
import ScrollToTopOnMount from '../../Utils/Functions/ScrollToTopOnMount';

const TermsPageComponent = (): JSX.Element => (
    <SectionComponent header="FriendsLibrary Terms of Use">
        <div className='terms-of-use-wrapper column-with-padding'>
            <ScrollToTopOnMount />
            <HeaderMeta title="Terms of Use" />
            <h1 className='header'>[ Terms of Use ]</h1>
            <GenerateMultipleSections listOfSections={Object.values(termsOfUse)} />
        </div>
    </SectionComponent>
);

export default TermsPageComponent;