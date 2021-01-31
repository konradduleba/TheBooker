import React from 'react';
import { defaultWindowWidth } from '../../Utils/appSettings';
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
                id={title}
                header={title}
                style={{ width: defaultWindowWidth, marginBottom: "20px" }}
                key={title}>
                <div dangerouslySetInnerHTML={{ __html: `${description}` }}></div>
            </SectionComponent>
        ))}
    </>
);

export default GenerateMultipleSections;