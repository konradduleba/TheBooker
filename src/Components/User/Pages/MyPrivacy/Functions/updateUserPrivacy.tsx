import axiosInstance from "../../../../../Authentication/axios";
import EndPointListEnum from "../Database/EndPointListEnum";
import IReturnedTypes from "../Database/IReturnedTypes";
import IUpdateUserPrivacy from "../Types/IUpdateUserPrivacy";

const updateUserPrivacy = async (data: IUpdateUserPrivacy): Promise<IReturnedTypes> => axiosInstance
    .patch(EndPointListEnum.GET_PRIVACY, data)
    .then(({ data }) => data)
    .catch(({ status }) => status);

export default updateUserPrivacy;
