import IRandomPerson from 'Components/Global/FriendList/Types/IRandomPerson';
import ISelectOptions from '../Types/ISelectOptions';

const generateFriendList = (friendList: IRandomPerson[]): ISelectOptions[] => friendList.map(({ id, picture, lastname, username, name }) => {
    return {
        value: id,
        label: `${name} ${lastname}`
    }
})

export default generateFriendList;