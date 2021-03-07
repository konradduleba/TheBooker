import IAccountInfo from '../../../../GlobalTypes/IPersonData/IAccountInfo';
import IRandomPerson from '../Types/IRandomPerson';

const createSectionHeader = ({ name, lastName }: IAccountInfo, friendList: IRandomPerson[]): string => {
    const numberOfFriends: number = friendList.length;
    const userProfileName = `${name} ${lastName}`;
    const sectionHeader = `${userProfileName} Friends (${numberOfFriends})`;

    return sectionHeader;
}

export default createSectionHeader;