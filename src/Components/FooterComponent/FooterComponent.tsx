import React, { useContext } from 'react';
import MenuList from '../GlobalComponents/MenuList/MenuList';
import './Styles/FooterComponent.scss';
import { footerMenu } from '../../Utils/menuRoutes';
import { UserData } from '../../Authentication/UserDataContext/UserDataContext';

const FooterComponent = (): JSX.Element => {
    const { userData } = useContext(UserData);
    const isUserLoggedIn = userData?.isLoggedIn ? true : false;

    return (
        <footer>
            <MenuList menuList={footerMenu} isUserLoggedIn={isUserLoggedIn} />
            <h1>a Mark Zuckenberg production</h1>
            <h2>mirrored in 2021 by Konrad Dulęba</h2>
            <p>TheBooker &copy; 2004</p>
        </footer>
    )
};

export default FooterComponent;