import React from 'react';
import SectionComponent from '../GlobalComponents/SectionComponent/SectionComponent';
import testParties from './testParties';
import './Styles/MyPartiesComponent.scss';
import DisplayParty from './Components/DisplayParty';
import separatePartiesIntoGroups from './Functions/separatePartiesIntoGroups';

const MyPartiesComponent = (): JSX.Element => {
    const { finishedParties, actualParties, incomingParties } = separatePartiesIntoGroups(testParties);

    return (
        <SectionComponent header={`My Parties`}>
            <div className='my-parties-wrapper'>
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