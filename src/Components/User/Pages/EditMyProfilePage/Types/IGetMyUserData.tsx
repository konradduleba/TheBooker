import IPersonData from "../../../../../Utils/Types/IPersonData";

export default interface IGetMyUserData {
    isSuccess: boolean;
    userData: IPersonData;
}