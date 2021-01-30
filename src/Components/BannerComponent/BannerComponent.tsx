import React from 'react';
import TheFacebookBanner from '../../Assets/the-facebook-banner.jpg';
import TheFacebookLogo from '../../Assets/the-facebook-logo.jpg';
import './BannerComponent.scss';

const BannerComponent = ():JSX.Element => (
    <section className='banner-wrapper'>
        <img src={TheFacebookBanner} alt="the facebook banner"/>
        <div className='logo-and-menu'>
            <img src={TheFacebookLogo} alt="the facebook logo"/>
            <ul>
                <li>
                    <a href="#login">login</a>
                </li>
                <li>
                    <a href="#register">register</a>
                </li>
                <li>
                    <a href="#about">about</a>
                </li>
            </ul>
        </div>
    </section>
)

export default BannerComponent;