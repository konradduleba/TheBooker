import React from 'react';
import testGroupList from './testGroupList';
import './Styles/MyGroupsPage.scss';
import DisplayGroupsUserBelongTo from './Components/DisplayGroupsUserBelongTo';
import { Link } from 'react-router-dom';
import { search, createGroup } from '../../../../Routes/Utils/routes.json';
import ESearchTypes from '../SearchPage/Enums/ESearchTypes';
import HeaderMeta from '../../../Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../../../Global/Section/Section';

const MyGroupsComponent = (): JSX.Element => (
    <SectionComponent header={`My Groups (${testGroupList.length})`}>
        <HeaderMeta title='My Groups' />
        <div className='my-groups-page-wrapper'>
            <nav>
                <Link to={`/app${search.href}/${ESearchTypes.GROUP}`}>
                    <button className='normal-button'>Find Group</button>
                </Link>
                <Link to={`/app${createGroup.href}`}>
                    <button className='normal-button'>Create Group</button>
                </Link>
            </nav>
            <DisplayGroupsUserBelongTo groupList={testGroupList} />
        </div>
    </SectionComponent>
);

export default MyGroupsComponent;