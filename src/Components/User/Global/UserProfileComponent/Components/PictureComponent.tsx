import React from 'react';
import { Link } from 'react-router-dom';
import SectionComponent from '../../../../Global/Section/Section';
import IPictureComponent from '../Types/IPictureComponent';

const PictureComponent = ({ accountInfo, isMyProfile }: IPictureComponent): JSX.Element => {
    const { name, lastname, picture } = accountInfo;
    const header = <><span>Picture</span>{isMyProfile && <Link to='/app/new-profile-picture'>Edit</Link>}</>

    return (
        <SectionComponent header={header} style={{ width: '100%' }} className='margin-between-sections picture-component'>
            <div className='picture-container'>
                <img src={picture} alt={`${name} ${lastname}`} />
            </div>
        </SectionComponent>
    );
}

export default PictureComponent;