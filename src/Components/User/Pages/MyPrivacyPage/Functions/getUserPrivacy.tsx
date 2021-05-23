import axiosInstance from "../../../../../Authentication/axios";
import EndPointListEnum from "../Database/EndPointListEnum";
import IReturnedTypes from "../Database/IReturnedTypes";

const getUserPrivacy = async (): Promise<IReturnedTypes> => axiosInstance
    .get(EndPointListEnum.GET_PRIVACY)
    .then(({ data }) => data)
    .catch(({ status }) => status);

export default getUserPrivacy;