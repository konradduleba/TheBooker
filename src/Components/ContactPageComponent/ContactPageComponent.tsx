import React from 'react';
import { Link } from 'react-router-dom';
import SectionComponent from '../GlobalComponents/SectionComponent';
import { defaultWindowWidth } from '../../Utils/appSettings';
import './ContactPageComponent.scss';

const ContactPageComponent = (): JSX.Element => (
    <SectionComponent header="Contact Us">
        <div className='contact-page-wrapper'>
            <h1>[ Contact Us ]</h1>
            <SectionComponent header="Email" style={{ width: defaultWindowWidth }}>
                <p><span>Konrad Dulęba</span>kon.duleba@gmail.com</p>
            </SectionComponent>
            <Link to="/"><button>Home</button></Link>
        </div>
    </SectionComponent>
);

export default ContactPageComponent;