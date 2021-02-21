import IPersonData from '../../../../GlobalTypes/IPersonData/IPersonData';
import defaultUser from '../../../../Utils/defaultUserData.json';
import IRandomPerson from '../Types/IRandomPerson';

const createSectionHeader = ({ ID, accountInfo }: IPersonData, friendList: IRandomPerson[]): string => {
    const isThisMe = ID === defaultUser.ID ? true : false;
    const numberOfFriends: number = friendList.length;
    const userProfileName = `${accountInfo.name} ${accountInfo.lastName}`;
    const sectionHeader = isThisMe ? `My Friends (${numberOfFriends})` : `${userProfileName} Friends (${numberOfFriends})`;

    return sectionHeader;
}

export default createSectionHeader;