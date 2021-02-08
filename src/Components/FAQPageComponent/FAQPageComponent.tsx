import React from 'react';
import SectionComponent from '../GlobalComponents/SectionComponent/SectionComponent';
import './Styles/FAQPageComponent.scss';
import faq from '../../Utils/faq.json';
import GenerateMultipleSections from '../GlobalComponents/GenerateMultipleSections/GenerateMultipleSections';
import dotIcon from '../../Assets/dot.png';
import HeaderMeta from '../GlobalComponents/HeaderMeta/HeaderMeta';
import { faqMeta } from '../../Utils/headerMeta.json';
import ScrollToTopOnMount from '../GlobalComponents/ScrollToTopOnMount/ScrollToTopOnMount';

const FAQPageComponent = (): JSX.Element => (
    <SectionComponent header="Frequently Asked Questions">
        <div className='faq-wrapper column-with-padding'>
            <ScrollToTopOnMount />
            <HeaderMeta title={faqMeta.title} />
            <h1 className='header'>[ FAQ ]</h1>
            <ul>
                {Object.values(faq).map(({ title }, index) => <li key={title}><img src={dotIcon} alt="dot icon" /><a href={`#${title}`}>{title}</a></li>)}
            </ul>
            <GenerateMultipleSections listOfSections={Object.values(faq)} />
        </div>
    </SectionComponent>
);

export default FAQPageComponent;