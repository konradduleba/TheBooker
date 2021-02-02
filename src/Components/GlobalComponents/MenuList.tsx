import React from 'react';
import { Link } from 'react-router-dom';
import { MenuListTypes } from '../../Utils/globalTypes';

interface ListOfItems {
    menuList: MenuListTypes[];
    isUserLoggedIn: boolean;
}

const MenuList = ({ menuList, isUserLoggedIn }: ListOfItems): JSX.Element => (
    <ul>
        {menuList.map(({ title, href }: MenuListTypes) => <li key={title}><Link to={isUserLoggedIn ? `/app${href}` : href}>{title}</Link></li>)}
    </ul>
);

export default MenuList;