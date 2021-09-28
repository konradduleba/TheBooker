import IRandomPerson from "Components/Global/FriendList/Types/IRandomPerson";
import axiosInstance from "../../../../../Authentication/axios";
import EndPointListEnum from "../Database/EndPointListEnum";

const getRandomPeople = async (): Promise<IRandomPerson[]> => await axiosInstance
    .get(EndPointListEnum.GET_RANDOM_PEOPLE)
    .then(({ data }) => data)
    .catch(({ status }) => status);

export default getRandomPeople;