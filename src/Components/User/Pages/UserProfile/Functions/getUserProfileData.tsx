import axiosInstance from "Authentication/axios";
import IGetMyUserData from "../../MyProfile/Types/IGetMyUserData";
import EndPointListEnum from "../Database/EndPointListEnum";

const getUserProfileData = async (username: string): Promise<IGetMyUserData> => await axiosInstance
    .post(EndPointListEnum.GET_PROFILE_INFO, { username })
    .then(({ data }) => data)
    .catch(({ data }) => data);

export default getUserProfileData;