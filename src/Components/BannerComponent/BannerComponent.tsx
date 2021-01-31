import React, { useContext } from 'react';
import MenuList from '../GlobalComponents/MenuList';
import { UserData } from '../../Authentication/UserDataContext';
import { menuListLoggedIn, menuListNotLoggedIn } from '../../Utils/menuRoutes';
import { Link } from 'react-router-dom';
import TheBookerBanner from '../../Assets/thebooker-banner.jpg';
import TheBookerLogo from '../../Assets/thebooker-logo.jpg';
import './BannerComponent.scss';

const BannerComponent = (): JSX.Element => {
    const { userData } = useContext(UserData);

    const menuList = userData?.isLoggedIn ? menuListLoggedIn : menuListNotLoggedIn;

    return (
        <section className='banner-wrapper'>
            <img src={TheBookerBanner} alt="the TheBooker banner" />
            <div className='logo-and-menu'>
                <Link to='/'><img src={TheBookerLogo} alt="the TheBooker logo" /></Link>
                <MenuList menuList={menuList} />
            </div>
        </section>
    )
}

export default BannerComponent;