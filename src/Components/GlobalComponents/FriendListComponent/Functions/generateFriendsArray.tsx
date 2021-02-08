import IRandomPerson from "../Types/IRandomPerson";
import generateRandomNumber from "./generateRandomNumber";

const generateFriendsArray = (friendList: IRandomPerson[], limit?: number): IRandomPerson[] => {
    const randomFriends: IRandomPerson[] = [];

    if (limit) {
        for (let i = 0; i < limit; i++) {
            let status = false;

            while (!status) {
                const number: number = generateRandomNumber(friendList.length);
                if (!randomFriends.filter(({ ID }) => ID === number).length) {
                    randomFriends.push(friendList[number]);

                    status = true;
                }
            }
        }
    }

    return randomFriends;
}

export default generateFriendsArray