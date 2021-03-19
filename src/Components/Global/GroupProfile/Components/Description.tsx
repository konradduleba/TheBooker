import React from 'react';
import SectionComponent from '../../Section/Section';
import IDescription from '../Types/IDescription';

const Description = ({ description }: IDescription): JSX.Element => (
    <SectionComponent header='Group Description' style={{ width: "100%", marginBottom: "10px" }}>
        <div className='description-wrapper'>
            <p>{description}</p>
        </div>
    </SectionComponent>
);

export default Description;