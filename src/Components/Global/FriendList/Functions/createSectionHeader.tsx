import IAccountInfo from '../../../../Utils/Types/IAccountInfo';
import IRandomPerson from '../Types/IRandomPerson';

const createSectionHeader = ({ name, lastname }: IAccountInfo, friendList: IRandomPerson[], isThatMe?: boolean): string => {
    const numberOfFriends: number = friendList.length;
    const userProfileName = `${name} ${lastname}`;
    const sectionHeader = isThatMe ? 'My Friends' : `${userProfileName} Friends (${numberOfFriends})`;

    return sectionHeader;
}

export default createSectionHeader;