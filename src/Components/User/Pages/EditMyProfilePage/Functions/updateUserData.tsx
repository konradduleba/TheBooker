import axiosInstance from "../../../../../Authentication/axios";
import EndPointListEnum from "../Database/EndPointListEnum";
import IReturnedTypes from "../Database/IReturnedTypes";
import IAvaibleUserDataToEdit from "../Types/IAvaibleUserDataToEdit";

const updateUserData = async (userData: IAvaibleUserDataToEdit): Promise<IReturnedTypes> => axiosInstance
    .patch(EndPointListEnum.GET_INFORMATION, userData)
    .then(({ data }) => data)
    .catch(({ status }) => status);

export default updateUserData;