import axiosInstance from "Authentication/axios";
import IRandomPerson from "Components/Global/FriendList/Types/IRandomPerson";

const getInviteList = async (): Promise<IRandomPerson[]> => axiosInstance
    .get('/user/invite-list')
    .then(({ data }) => data)
    .catch(({ data }) => data);

export default getInviteList;