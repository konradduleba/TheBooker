import React from 'react';
import SectionComponent from '../../GlobalComponents/SectionComponent/SectionComponent';

const ConnectionComponent = (): JSX.Element => (
    <SectionComponent header="Connection" style={{ width: '100%' }} className='margin-between-sections'>
        <div className='connection-container'>
            <p>That is You!</p>
        </div>
    </SectionComponent>
);

export default ConnectionComponent;