import axiosInstance from "Authentication/axios";
import ISendFriendRequest from "../Types/ISendFriendRequest";

const removeFromFriendList = (username: string): Promise<ISendFriendRequest> => axiosInstance
    .delete('/user/friend', { data: { username } })
    .then(({ data }) => data)
    .catch(error => error);

export default removeFromFriendList;