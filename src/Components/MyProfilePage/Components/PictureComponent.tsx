import React from 'react';
import SectionComponent from '../../Global/Section/Section';
import IPictureComponent from '../Types/IPictureComponent';

const PictureComponent = ({ name, lastName, picture }: IPictureComponent): JSX.Element => (
    <SectionComponent header="Picture" style={{ width: '100%' }} className='margin-between-sections'>
        <div className='picture-container'>
            <img src={picture} alt={`${name} ${lastName}`} />
        </div>
    </SectionComponent>
);

export default PictureComponent;