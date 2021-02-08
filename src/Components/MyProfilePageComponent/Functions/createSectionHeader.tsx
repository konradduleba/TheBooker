import IPersonData from "../../../GlobalTypes/IPersonData/IPersonData";
import defaultUser from '../../../Utils/defaultUserData.json';

const createSectionHeader = ({ ID, accountInfo }: IPersonData): string => {
    const isThisMe = ID === defaultUser.ID ? true : false;

    const userProfileName = `${accountInfo.name} ${accountInfo.lastName}`;
    const createSectionHeader = isThisMe ? 'My Profile' : `${userProfileName}'s Profile`;

    return createSectionHeader;
}

export default createSectionHeader;