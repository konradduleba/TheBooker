import React from 'react';
import convertDateToNormalValues from '../Functions/convertDateToNormalValues';
import IDisplayParty from '../Types/IDisplayParty';
import IMyParties from '../Types/IMyParties';

const DisplayParty = ({ partyList }: IDisplayParty): JSX.Element => (
    <>
        {partyList.map(({ ID, monthDayYear, hourMinuteSecond, name, photo }: IMyParties) => <li key={`${name}${ID}`}>
            <h2>{name}</h2>
            <p>{convertDateToNormalValues(monthDayYear)}</p>
            <p>{hourMinuteSecond}</p>
            <img src={photo} alt={`${name}`} />
            <button>See Details</button>
        </li>)}
    </>
)

export default DisplayParty;