import IPersonData from "Utils/Types/IPersonData";

export default interface IUserInfoComponent {
    personData: IPersonData;
    isMyProfile?: boolean;
}