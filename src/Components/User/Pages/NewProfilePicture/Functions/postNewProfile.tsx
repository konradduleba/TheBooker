import axiosInstance from "../../../../../Authentication/axios";
import EndPointListEnum from "../Database/EndPointListEnum";
import IBackendMessage from "../Types/IBackendMessage";

const postNewProfile = async (file: FormData): Promise<IBackendMessage> => await axiosInstance
    .post(EndPointListEnum.POST_NEW_PHOTO, file)
    .then(({ data }) => data)
    .catch(({ status }) => status);

export default postNewProfile;