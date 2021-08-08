import IRandomPerson from "../Types/IRandomPerson";
import generateRandomNumber from "./generateRandomNumber";

const generateFriendsArray = (friendList: IRandomPerson[], limit?: number): IRandomPerson[] => {
    const randomFriends: IRandomPerson[] = [];

    // if (limit && friendList.length) {
    //     for (let i = 0; i < limit; i++) {
    //         let status = false;

    //         while (!status) {
    //             const number: number = generateRandomNumber(friendList.length);

    //             if (!randomFriends.filter(({ id }) => id).length) {
    //                 randomFriends.push(friendList[number]);

    //                 status = true;
    //             }
    //         }
    //     }

    //     return randomFriends;
    // }

    return friendList;
}

export default generateFriendsArray;