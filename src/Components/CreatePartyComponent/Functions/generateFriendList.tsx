import testFriendList from '../../GlobalComponents/FriendListComponent/testFriendList';
import ISelectOptions from '../Types/ISelectOptions';

const generateFriendList = (): ISelectOptions[] => {
    const options: ISelectOptions[] = [];

    testFriendList.map(({ ID, name }) => options.push({
        value: ID,
        label: name
    }))

    return options;
}

export default generateFriendList;