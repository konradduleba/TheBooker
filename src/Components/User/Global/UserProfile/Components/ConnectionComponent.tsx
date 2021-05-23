import React from 'react';
import SectionComponent from '../../../../Global/Section/Section';
import IConnectionComponent from '../Types/IConnectionComponent';

const ConnectionComponent = ({ isThatMe }: IConnectionComponent): JSX.Element => (
    <SectionComponent header="Connection" style={{ width: '100%' }} className='margin-between-sections'>
        <div className='connection-container'>
            <p>{isThatMe ? 'That is You!' : 'Dodać trzeba tutaj xd'}</p>
        </div>
    </SectionComponent>
);

export default ConnectionComponent;