import axiosInstance from "Authentication/axios";
import IRandomPerson from "../Types/IRandomPerson";

const getUserFriendList = async (username: string): Promise<IRandomPerson[]> => await axiosInstance
    .post('/user/user-friend-list', { username })
    .then(({ data }) => data)
    .catch(({ data }) => data);

export default getUserFriendList;