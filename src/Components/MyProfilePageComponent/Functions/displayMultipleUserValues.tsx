import React from 'react';

const displayMultipleUserValues = (table: string[]): JSX.Element => (
    <>
        {table.map((value, index) => <span key={value}>{index ? `, ${value}` : value}</span>)}
    </>
);

export default displayMultipleUserValues;