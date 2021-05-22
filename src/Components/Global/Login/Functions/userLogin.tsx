import axiosInstance from "../../../../Backend/axios"
import EndPointListEnum from "../Database/EndPointListEnum";
import ReturnedLoginTypes from "../Database/ReturnedLoginTypes";

const userLogin = async (email: string, pwd: string): Promise<ReturnedLoginTypes> => await axiosInstance
    .post(EndPointListEnum.LOGIN, { email, pwd })
    .then(({ data }) => data)
    .catch(({ status }) => status);

export default userLogin;