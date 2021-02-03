import React from 'react';
import { Link } from 'react-router-dom';
import IListOfItems from '../../Types/IListOfItems';
import IMenuListTypes from '../../Types/IMenuListTypes';

const MenuList = ({ menuList, isUserLoggedIn }: IListOfItems): JSX.Element => (
    <ul>
        {menuList.map(({ title, href }: IMenuListTypes) => <li key={title}><Link to={isUserLoggedIn ? `/app${href}` : href}>{title}</Link></li>)}
    </ul>
);

export default MenuList;