import axiosInstance from "Authentication/axios";
import IRandomPerson from "../Types/IRandomPerson";

const getMyFriendList = async (): Promise<IRandomPerson[]> => await axiosInstance
    .get('/user/friend-list')
    .then(({ data }) => data)
    .catch(({ data }) => data);

export default getMyFriendList;