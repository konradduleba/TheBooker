import IRandomPerson from "Components/Global/FriendList/Types/IRandomPerson";
import axiosInstance from "../../../../../Authentication/axios";
import { ESearchEndPointList } from "../Database/ESearchEndPointList";
import ISearchForm from "../Types/ISearchForm";

const postSearchQuery = async (data: ISearchForm): Promise<IRandomPerson[]> => await axiosInstance
    .post(ESearchEndPointList.SEND_QUERY, data)
    .then(({ data }) => data)
    .catch(({ status }) => status);

export default postSearchQuery;