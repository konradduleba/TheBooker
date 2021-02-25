import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderMeta from '../Global/HeaderMeta/HeaderMeta';
import SectionComponent from '../Global/Section/Section';
import { myAccount } from '../../Utils/routes.json';
import './Styles/DeactivateAccount.scss';
import DeactivateAccountForm from './Components/DeactivateAccountForm';

const DeactivateAccount = (): JSX.Element => {
    const [isContinue, setContinue] = useState<boolean>(false);

    const sectionHeader = "Deactivate Account";

    return (
        <SectionComponent header={sectionHeader}>
            <HeaderMeta title={sectionHeader} />
            <div className='deactivate-account-wrapper'>
                <Link to={`/app${myAccount.href}`}>
                    <button className='normal-button'>Go Back</button>
                </Link>
                <div className='content-wrapper'>
                    <h1>[ Deactivate ]</h1>
                    <h2>This can be temporarily</h2>
                    <p>Your account will be disabled and your name and photos will be removed from most things {`you've`} shared</p>
                    {!isContinue && <button className='normal-button' onClick={() => setContinue(true)}>Continue</button>}
                </div>
                {isContinue && <DeactivateAccountForm />}
            </div>
        </SectionComponent>
    )
}

export default DeactivateAccount;