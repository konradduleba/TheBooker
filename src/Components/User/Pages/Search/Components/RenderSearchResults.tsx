import React from 'react';
import { Link } from 'react-router-dom';
import IRenderSearchResults from "../Types/IRenderSearchResults";
import { people, home } from '../../../../../Routes/Utils/routes.json';

const RenderSearchResults = ({ searchResult }: IRenderSearchResults): JSX.Element => {

    const sendRequest = (userID: number) => {
        console.log(userID);
    }

    return (
        <div className='search-results'>
            {searchResult.map(({ ID, name, photo }) => <div key={`${name}${ID}`} className='result-wrapper'>
                <div>
                    <img src={photo} alt={name} />
                    <p>{name}</p>
                </div>
                <div>
                    <Link to={`/app${people.href}/${ID}`}>
                        <button className='normal-button'>Profile</button>
                    </Link>
                    <button className='normal-button' onClick={() => sendRequest(ID)}>Invite</button>
                </div>
            </div>)}
            <Link to={`/app${home.href}`}>
                <button className='normal-button home'>Home</button>
            </Link>
        </div>
    )
}

export default RenderSearchResults;