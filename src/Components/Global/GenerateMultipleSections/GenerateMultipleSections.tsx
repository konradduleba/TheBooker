import React from 'react';
import IMultipleSections from './Types/IMultipleSections';
import SectionComponent from '../Section/Section';
import ISection from './Types/ISection';

const GenerateMultipleSections = ({ listOfSections }: IMultipleSections): JSX.Element => (
    <>
        {listOfSections.map(({ title, description }: ISection) => (
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