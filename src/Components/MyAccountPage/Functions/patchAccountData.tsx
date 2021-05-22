import axiosInstance from "../../../Backend/axios";
import IBackendMessage from "../Types/IBackendMessage";
import { IOnSubmit } from "../Types/IGenerateInfoAndEditForm";

const patchAccountData = async (accountData: IOnSubmit, endPoint: string): Promise<IBackendMessage> => axiosInstance
    .patch(endPoint, accountData)
    .then(({ data }) => data)
    .catch(({ status }) => status);

export default patchAccountData;