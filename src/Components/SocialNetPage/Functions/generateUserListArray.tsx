import IUser from "../Types/IUser";
import generateRandomNumber from "./generateRandomNumber";

const generateUserListArray = (friendList: IUser[], limit?: number): IUser[] => {
    const randomUsers: IUser[] = [];

    if (limit && friendList.length) {
        const upperLimit = limit > friendList.length ? friendList.length : limit;

        for (let i = 0; i < upperLimit; i++) {
            let status = false;

            while (!status) {
                const number: number = generateRandomNumber(friendList.length);

                if (!randomUsers.filter(({ id }) => id === number).length) {
                    randomUsers.push(friendList[number]);

                    status = true;
                }
            }
        }

        return randomUsers;
    }

    return friendList;
}

export default generateUserListArray;