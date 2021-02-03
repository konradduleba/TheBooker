import React from 'react';
import IMultipleSections from '../../Types/IMultipleSections';
import IPrivacyTypes from '../../Types/IPrivacyTypes';
import SectionComponent from './SectionComponent';

const GenerateMultipleSections = ({ listOfSections }: IMultipleSections): JSX.Element => (
    <>
        {listOfSections.map(({ title, description }: IPrivacyTypes) => (
            <SectionComponent
                className="inside-window margin-between-sections"
                id={title}
                header={title}
                key={title}>
                <div dangerouslySetInnerHTML={{ __html: `${description}` }}></div>
            </SectionComponent>
        ))}
    </>
);

export default GenerateMultipleSections;