import axiosInstance from "../../../../Authentication/axios";
import EndPointListEnum from "../Database/EndPointListEnum";
import IGetUserData from "../Types/IGetUserData";

const getUserData = async (): Promise<IGetUserData> => await axiosInstance
    .get(EndPointListEnum.GET_ROLE)
    .then(({ data }) => data)
    .catch(({ status }) => status);

export default getUserData;