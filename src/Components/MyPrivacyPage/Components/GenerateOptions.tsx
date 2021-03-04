import React from 'react';
import ESelectOptions from '../Enums/ESelectOptions';
import IGenerateOptions from '../Types/IGenerateOptions';

const GenerateOptions = ({ optionsEnum }: IGenerateOptions): JSX.Element => {
    if (optionsEnum)
        return (
            <>
                {Object.values(optionsEnum).map((option => option && <option key={option} value={option}>{option}</option>))}
            </>
        )

    return (
        <>
            {Object.values(ESelectOptions).map((option => option && <option key={option} value={option}>{option}</option>))}
        </>
    )
}

export default GenerateOptions;