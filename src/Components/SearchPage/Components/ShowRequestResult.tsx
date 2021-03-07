import React from 'react';
import IRenderSearchResults from "../Types/IRenderSearchResults";
import RenderSearchResults from './RenderSearchResults';

const ShowRequestResult = ({ searchResult }: IRenderSearchResults): JSX.Element => {
    if (!searchResult.length)
        return <p>No results</p>

    return <RenderSearchResults searchResult={searchResult} />
}

export default ShowRequestResult;