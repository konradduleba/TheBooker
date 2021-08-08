import React from 'react';
import ESelectOptions from '../Enums/ESelectOptions';

const GenerateOptions = (): JSX.Element => (
    <>
        {Object.values(ESelectOptions).map((option => option && <option key={option} value={option}>{option}</option>))}
    </>
)

export default GenerateOptions;