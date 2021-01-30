import React from 'react';
import { Link } from 'react-router-dom';
import { register, login } from '../../Utils/routes.json';
import './WelcomePageComponent.scss';
import DotIcon from '../../Assets/dot.png';
import SectionComponent from '../GlobalComponents/SectionComponent';

const WelcomePageComponent = (): JSX.Element => (
    <SectionComponent header="Welcome to TheFacebook">
        <div className='welcome-page-wrapper'>
            <h1>[ Welcome to TheFacebook ]</h1>
            <div>
                <p>Thefacebook is an online directory that connects people through social networks at colleges.</p>
                <p>We have opened up Thefacebook for popular consumption at <span>Harvard University</span>.</p>
                <p>You can use Thefacebook to:</p>
                <ul>
                    <li><img src={DotIcon} alt="black dot" /> Search for people at your school</li>
                    <li><img src={DotIcon} alt="black dot" /> Find out who are in your classes</li>
                    <li><img src={DotIcon} alt="black dot" /> Look up your {`friends'`} friends</li>
                    <li><img src={DotIcon} alt="black dot" /> See a visualization of your social network</li>
                </ul>
                <p>To get started, click below to register. If you have already registered, you can log in.</p>
                <div>
                    <Link to={register.href}><button>{register.title}</button></Link>
                    <Link to={login.href}><button>{login.title}</button></Link>
                </div>
            </div>
        </div>
    </SectionComponent>
)

export default WelcomePageComponent;