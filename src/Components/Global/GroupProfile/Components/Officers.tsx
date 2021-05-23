import React from 'react';
import { Link } from 'react-router-dom';
import SectionComponent from '../../Section/Section';
import IOfficersComponent from '../Types/IOfficersComponent';
import { people } from '../../../../Routes/Utils/routes.json';

const Officers = ({ officers }: IOfficersComponent): JSX.Element => (
    <SectionComponent header="Officers" style={{ width: "100%", marginBottom: "10px" }}>
        <div className='officers-wrapper'>
            {officers.map(({ id, label, value }) => <div key={label}>
                <p>{label}</p>
                <Link to={`/app${people.href}/${id}`}>
                    {value}
                </Link>
            </div>)}
        </div>
    </SectionComponent>
);

export default Officers;