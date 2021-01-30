import React from 'react';
import './FooterComponent.scss';

const FooterComponent = ():JSX.Element => (
    <footer>
        <ul>
            <li>
                <a href="#about">about</a>
            </li>
            <li>
                <a href="#contact">contact</a>
            </li>
            <li>
                <a href="#about">faq</a>
            </li>
            <li>
                <a href="#about">terms</a>
            </li>
            <li>
                <a href="#about">privacy</a>
            </li>
        </ul>
        <h1>a Mark Zuckenberg production</h1>
        <h2>mirrored in 2021 by Konrad Dulęba</h2>
        <p>TheFacebook &copy; 2004</p>
    </footer>
)

export default FooterComponent;