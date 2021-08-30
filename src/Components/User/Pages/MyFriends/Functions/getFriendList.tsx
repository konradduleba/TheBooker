import axiosInstance from "Authentication/axios";
import IRandomPerson from "Components/Global/FriendList/Types/IRandomPerson";

const getFriendList = (): Promise<IRandomPerson[] | []> => axiosInstance
    .get('/user/friend-list')
    .then(({ data }) => data);

export default getFriendList;