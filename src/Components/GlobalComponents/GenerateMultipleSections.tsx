import React from 'react';
import SectionComponent from './SectionComponent';

interface PrivacyTypes {
    title: string;
    description: string;
}

interface MultipleSections {
    listOfSections: PrivacyTypes[];
}

const GenerateMultipleSections = ({ listOfSections }: MultipleSections): JSX.Element => (
    <>
        {listOfSections.map(({ title, description }: PrivacyTypes) => (
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