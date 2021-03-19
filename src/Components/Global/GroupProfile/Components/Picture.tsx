import React from 'react';
import SectionComponent from '../../Section/Section';
import IPicture from '../Types/IPicture';

const Picture = ({ picture }: IPicture): JSX.Element => (
    <SectionComponent header="Picture" style={{ width: "100%" }} className="picture-container">
        <img src={picture} alt="Group" />
    </SectionComponent>
)

export default Picture;