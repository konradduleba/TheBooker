import axiosInstance from "Authentication/axios";

const acceptFriendInvite = async (username: string) => await axiosInstance
    .post('/user/new-friend', { username })
    .then(({ data }) => data)
    .catch(({ data }) => data);

export default acceptFriendInvite;