import React from 'react';
import MenuList from '../GlobalComponents/MenuList';
import './FooterComponent.scss';
import { footerMenu } from '../../Utils/menuRoutes';

const FooterComponent = ():JSX.Element => (
    <footer>
        <MenuList menuList={footerMenu}/>
        <h1>a Mark Zuckenberg production</h1>
        <h2>mirrored in 2021 by Konrad Dulęba</h2>
        <p>TheFacebook &copy; 2004</p>
    </footer>
)

export default FooterComponent;