import IPersonData from "../../../GlobalTypes/IPersonData/IPersonData";

export default interface IUserDataContainer {
    isLoggedIn?: boolean;
    userData?: IPersonData;
}