import EUserRole from "../../../GlobalEnums/EUserRole";

export default interface IUserDataContainer {
    isLoggedIn?: boolean;
    userData?: EUserRole;
}