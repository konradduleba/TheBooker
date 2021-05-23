import EUserRole from "../../../Utils/Enums/EUserRole";

export default interface IUserDataContainer {
    isLoggedIn?: boolean;
    userData?: EUserRole;
}