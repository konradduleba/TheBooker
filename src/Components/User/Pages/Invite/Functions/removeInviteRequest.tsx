import axiosInstance from "Authentication/axios";
import IRemoveInviteRequest from "../Types/IRemoveInviteRequest";

const removeInviteRequest = async (username: string): Promise<IRemoveInviteRequest> => axiosInstance
    .delete('/user/invite', { data: { username } })
    .then(({ data }) => data)
    .catch(({ data }) => data);

export default removeInviteRequest;