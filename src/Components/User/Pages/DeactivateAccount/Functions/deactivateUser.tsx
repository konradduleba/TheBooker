import axiosInstance from "../../../../../Authentication/axios";
import IDeactivateUser from "../Types/IDeactivateUser";
import IMessageFromBackend from "../Types/IMessageFromBackend";

const deactivateUser = (formData: IDeactivateUser): Promise<IMessageFromBackend> => axiosInstance
    .post('/user/deactivate', formData)
    .then(({ data }) => data)
    .catch(({ status }) => status)

export default deactivateUser;