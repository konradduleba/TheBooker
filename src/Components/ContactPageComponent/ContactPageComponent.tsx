import React from 'react';
import { Link } from 'react-router-dom';
import SectionComponent from '../GlobalComponents/SectionComponent';
import './ContactPageComponent.scss';
import HeaderMeta from '../GlobalComponents/HeaderMeta';
import { contactMeta } from '../../Utils/headerMeta.json';

const ContactPageComponent = (): JSX.Element => (
    <SectionComponent header="Contact Us">
        <div className='contact-page-wrapper column-with-padding'>
            <HeaderMeta title={contactMeta.title} />
            <h1 className='header'>[ Contact Us ]</h1>
            <SectionComponent header="Email" className="inside-window margin-between-sections">
                <p><span>Konrad Dulęba</span>kon.duleba@gmail.com</p>
            </SectionComponent>
            <Link to="/"><button className='normal-button'>Home</button></Link>
        </div>
    </SectionComponent>
);

export default ContactPageComponent;