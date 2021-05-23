import axiosInstance from "../../../Authentication/axios";
import ILogoutUser from "../types/ILogoutUser";

const getLogoutUser = async (): Promise<ILogoutUser> => axiosInstance
    .get('user/logout')
    .then(({ data }) => data)
    .catch(({ status }) => status)

export default getLogoutUser;