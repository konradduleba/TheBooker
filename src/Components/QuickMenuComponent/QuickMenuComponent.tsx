import React, { useContext } from 'react';
import MenuList from '../GlobalComponents/MenuList/MenuList';
import { quickLinks } from '../../Utils/menuRoutes';
import { UserData } from '../../Authentication/UserDataContext/UserDataContext';
import './Styles/QuickMenuComponent.scss';

const QuickMenuComponent = (): JSX.Element => {
    const { userData } = useContext(UserData);
    const isUserLoggedIn = userData?.isLoggedIn ? true : false;

    return (
        <section className='quick-menu-wrapper'>
            <MenuList menuList={quickLinks} isUserLoggedIn={isUserLoggedIn} />
        </section>
    )
}
export default QuickMenuComponent;