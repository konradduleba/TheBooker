import IPersonData from "./IPersonData";

export default interface UserDataContainer {
    isLoggedIn?: boolean;
    userData?: IPersonData;
}