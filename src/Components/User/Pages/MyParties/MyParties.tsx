import React from 'react';
import testParties from './testParties';
import './Styles/MyParties.scss';
import DisplayParty from './Components/DisplayParty';
import separatePartiesIntoGroups from './Functions/separatePartiesIntoGroups';
import { Link } from 'react-router-dom';
import ESearchTypes from '../Search/Enums/ESearchTypes';
import HeaderMeta from '../../../Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../../../Global/Section/Section';
import { search, createParty } from '../../../../Routes/Utils/routes.json';

const MyPartiesComponent = (): JSX.Element => {
    const { finishedParties, actualParties, incomingParties } = separatePartiesIntoGroups(testParties);
    const sectionHeader = 'My Parties';

    return (
        <SectionComponent header={sectionHeader}>
            <HeaderMeta title={sectionHeader} />
            <div className='my-parties-wrapper'>
                <nav>
                    <Link to={`/app${search.href}/${ESearchTypes.PARTY}`}>
                        <button className='normal-button'>Search Party</button>
                    </Link>
                    <Link to={`/app${createParty.href}`}>
                        <button className='normal-button'>{createParty.title}</button>
                    </Link>
                </nav>
                <div>
                    <h1>[ Incoming Parties ]</h1>
                    <ul>
                        <DisplayParty partyList={incomingParties} />
                    </ul>
                </div>
                <div>
                    <h1>[ Actual Parties ]</h1>
                    <ul>
                        <DisplayParty partyList={actualParties} />
                    </ul>
                </div>
                <div>
                    <h1>[ Finished Parties ]</h1>
                    <ul>
                        <DisplayParty partyList={finishedParties} />
                    </ul>
                </div>
            </div>
        </SectionComponent>
    )
};

export default MyPartiesComponent;