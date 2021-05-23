import React from 'react';
import IValidateEntityVisibility from '../Types/IValidateEntityVisibility';

const ValidateEntityVisibility = ({ header, entities }: IValidateEntityVisibility): JSX.Element => {
    const entityArray = [];

    for (const [key, value] of Object.entries(entities)) {
        if (value)
            entityArray.push({ key, value })
    }

    if (entityArray.length)
        return (
            <div className='data-wrapper'>
                <h2>{header}:</h2>
                <div className='info-container'>
                    {entityArray.map(({ key, value }) => <p key={key}>
                        <span>{key}:</span>
                        <span>{value}</span>
                    </p>)}
                </div>
            </div>
        )

    return <></>
}

export default ValidateEntityVisibility;