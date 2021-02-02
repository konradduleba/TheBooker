import React, { useContext } from 'react';
import MenuList from '../GlobalComponents/MenuList';
import { quickLinks } from '../../Utils/menuRoutes';
import { UserData } from '../../Authentication/UserDataContext';
import './QuickMenuComponent.scss';

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