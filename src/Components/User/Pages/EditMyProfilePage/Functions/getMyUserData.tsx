import axiosInstance from "../../../../../Authentication/axios";
import EndPointListEnum from "../Database/EndPointListEnum";
import IGetMyUserData from "../Types/IGetMyUserData";

const getMyUserData = async (): Promise<IGetMyUserData> => await axiosInstance
    .get(EndPointListEnum.GET_INFORMATION)
    .then(({ data }) => data)
    .catch(({ status }) => status);

export default getMyUserData;