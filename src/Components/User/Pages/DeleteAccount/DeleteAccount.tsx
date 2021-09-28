import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { myAccount } from '../../../../Routes/Utils/routes.json';
import './Styles/DeleteAccount.scss';
import DeleteAccountForm from './Components/DeleteAccountForm';
import HeaderMeta from '../../../Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../../../Global/Section/Section';

const DeleteAccount = (): JSX.Element => {
    const [isContinue, setContinue] = useState<boolean>(false);

    const sectionHeader = "Delete Account";

    return (
        <SectionComponent header={sectionHeader}>
            <HeaderMeta title={sectionHeader} />
            <div className='delete-account-wrapper'>
                <Link to={`/app${myAccount.href}`}>
                    <button className='normal-button'>Go Back</button>
                </Link>
                <div className='content-wrapper'>
                    <h1>[ Delete ]</h1>
                    <h2>This is permanent</h2>
                    <p>When you delete your FriendsLibrary account, you {`won't`} be able to retrieve the content or information {`you've`} shared. All of your messages will also be deleted.</p>
                    {!isContinue && <button className='normal-button' onClick={() => setContinue(true)}>Continue</button>}
                </div>
                {isContinue && <DeleteAccountForm />}
            </div>
        </SectionComponent>
    )
}

export default DeleteAccount;