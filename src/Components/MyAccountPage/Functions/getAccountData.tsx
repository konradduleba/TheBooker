import axiosInstance from "../../../Backend/axios";
import IAccountData from "../Types/IAccountData";

const getAccountData = async (): Promise<IAccountData> => axiosInstance
    .get('/user/account-info')
    .then(({ data }) => data)
    .catch(({ status }) => status);

export default getAccountData;