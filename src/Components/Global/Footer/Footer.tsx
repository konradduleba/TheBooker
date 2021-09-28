import React, { useContext } from 'react';
import MenuList from '../MenuList/MenuList';
import './Styles/Footer.scss';
import { footerMenu } from '../../../Routes/Utils/menuRoutes';
import { UserData } from '../../../Contexts/UserDataContext/UserData';

const FooterComponent = (): JSX.Element => {
    const { userData } = useContext(UserData);
    const isUserLoggedIn = userData?.isLoggedIn ? true : false;

    return (
        <footer>
            <MenuList menuList={footerMenu} isUserLoggedIn={isUserLoggedIn} />
            <h1>a Mark Zuckenberg production</h1>
            <h2>mirrored in 2021 by Konrad Dulęba</h2>
            <p>FriendsLibrary &copy; 2021</p>
        </footer>
    )
};

export default FooterComponent;