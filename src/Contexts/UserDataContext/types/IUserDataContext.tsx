import UserDataContainer from "./IUserDataContainer";

export default interface UserDataContext {
    userData?: UserDataContainer;
    setUserData?: (value: UserDataContainer) => void;
    logoutUser?: () => void;
}