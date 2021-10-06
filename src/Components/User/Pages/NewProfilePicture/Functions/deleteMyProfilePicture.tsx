import axiosInstance from "../../../../../Authentication/axios";
import EndPointListEnum from "../Database/EndPointListEnum";
import IBackendMessage from "../Types/IBackendMessage";

const deleteMyProfilePicture = async (): Promise<IBackendMessage> => await axiosInstance
    .delete(EndPointListEnum.DELETE_MY_PROFILE_PICTURE)
    .then(({ data }) => data)
    .catch(({ status }) => status);

export default deleteMyProfilePicture;