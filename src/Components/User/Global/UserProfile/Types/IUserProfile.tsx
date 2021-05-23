import IPersonData from "../../../../../Utils/Types/IPersonData";

export default interface IUserProfile {
    personData: IPersonData;
    isThatMe?: boolean;
    isTemplate?: boolean;
}