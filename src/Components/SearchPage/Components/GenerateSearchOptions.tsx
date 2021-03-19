import React from 'react';
import ESearchTypes from '../Enums/ESearchTypes';

const GenerateSearchOptions = (): JSX.Element => (
    <>
        {Object.values(ESearchTypes).map((option => option && <option key={option} value={option}>{option}</option>))}
    </>
);

export default GenerateSearchOptions;