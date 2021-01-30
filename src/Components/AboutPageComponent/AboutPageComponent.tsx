import React from 'react';
import { Link } from 'react-router-dom';
import { defaultWindowWidth } from '../../Utils/appSettings';
import { contact } from '../../Utils/routes.json';
import SectionComponent from '../GlobalComponents/SectionComponent';
import './AboutPageComponent.scss';

const AboutPageComponent = (): JSX.Element => (
    <SectionComponent header="About Thefacebook">
        <div className='about-page-wrapper'>
            <h1>[ About ]</h1>
            <SectionComponent header="The Project" style={{ width: defaultWindowWidth }}>
                <p className='description'>Thefacebook is an online directory that connects people throught social networks at colleges and universities.</p>
            </SectionComponent>
            <SectionComponent header="The People" style={{ width: defaultWindowWidth, marginTop: "20px" }}>
                <ul>
                    <li><p>Mark Zuckenberg</p><p>Founder, Master and Commander, Enemy of the State.</p></li>
                    <li><p>Eduardo Saverin</p><p>Business Stuff, Corporate Stuff, Brazilian Affairs.</p></li>
                    <li><p>Andrew McCollum</p><p>Graphic Art, General Rockstar.</p></li>
                    <li><p>Konrad Dulęba</p><p>Programmer, he is mirroring this site.</p></li>
                    <li><Link to={contact.href}>Contact us.</Link></li>
                </ul>
            </SectionComponent>
            <Link to="/"><button>Home</button></Link>
        </div>
    </SectionComponent>
)

export default AboutPageComponent;