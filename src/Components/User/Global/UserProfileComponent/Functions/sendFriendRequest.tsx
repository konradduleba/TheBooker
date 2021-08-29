import axiosInstance from "Authentication/axios";
import ISendFriendRequest from "../Types/ISendFriendRequest";

const sendFriendRequest = (username: string): Promise<ISendFriendRequest> => axiosInstance
    .post('/user/invite', { username })
    .then(({ data }) => data)
    .catch(error => error);

export default sendFriendRequest;