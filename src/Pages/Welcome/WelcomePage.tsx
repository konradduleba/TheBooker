import React from 'react';
import { Link } from 'react-router-dom';
import { register, login } from '../../Routes/Utils/routes.json';
import './Styles/WelcomePage.scss';
import DotIcon from '../../Assets/dot.png';
import SectionComponent from '../../Components/Global/Section/Section';
import HeaderMeta from '../../Components/Global/HeaderMeta/HeaderMeta';

const WelcomePageComponent = (): JSX.Element => (
    <SectionComponent header="Welcome to FriendsLibrary">
        <div className='welcome-page-wrapper column-with-padding'>
            <HeaderMeta title="Welcome to FriendsLibrary!" />
            <h1 className='header'>[ Welcome to FriendsLibrary ]</h1>
            <div>
                <p>FriendsLibrary is an online directory that connects people through social networks at colleges.</p>
                <p>We have opened up FriendsLibrary for popular consumption at <span>Harvard University</span>.</p>
                <p>You can use FriendsLibrary to:</p>
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