import React from 'react';
import { Link } from 'react-router-dom';
import HeaderMeta from '../../Components/Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../../Components/Global/Section/Section';
import './Styles/ContactPage.scss';

const ContactPageComponent = (): JSX.Element => (
    <SectionComponent header="Contact Us">
        <div className='contact-page-wrapper column-with-padding'>
            <HeaderMeta title='Contact Us' />
            <h1 className='header'>[ Contact Us ]</h1>
            <SectionComponent header="Email" className="inside-window margin-between-sections">
                <p><span>Konrad Dulęba</span>kon.duleba@gmail.com</p>
            </SectionComponent>
            <Link to="/"><button className='normal-button'>Home</button></Link>
        </div>
    </SectionComponent>
);

export default ContactPageComponent;