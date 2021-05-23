import React from 'react';
import './Styles/FAQPage.scss';
import dotIcon from '../../Assets/dot.png';
import GenerateMultipleSections from '../../Components/Global/GenerateMultipleSections/GenerateMultipleSections';
import HeaderMeta from '../../Components/Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../../Components/Global/Section/Section';
import ScrollToTopOnMount from '../../Utils/Functions/ScrollToTopOnMount';
import faq from './Utils/faq.json';

const FAQPageComponent = (): JSX.Element => (
    <SectionComponent header="Frequently Asked Questions">
        <div className='faq-wrapper column-with-padding'>
            <ScrollToTopOnMount />
            <HeaderMeta title='Frequently Asked Questions' />
            <h1 className='header'>[ FAQ ]</h1>
            <ul>
                {Object.values(faq).map(({ title }) => <li key={title}><img src={dotIcon} alt="dot icon" /><a href={`#${title}`}>{title}</a></li>)}
            </ul>
            <GenerateMultipleSections listOfSections={Object.values(faq)} />
        </div>
    </SectionComponent>
);

export default FAQPageComponent;