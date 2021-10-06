import axiosInstance from "../../../../../Authentication/axios";
import EndPointListEnum from "../Database/EndPointListEnum";
import IGetMyProfilePicture from "../Types/IGetMyProfilePicture";

const getMyProfilePicture = async (): Promise<IGetMyProfilePicture> => await axiosInstance
    .get(EndPointListEnum.GET_MY_PROFILE)
    .then(({ data }) => data)
    .catch(({ status }) => status);

export default getMyProfilePicture;