import IPersonData from "../../../../GlobalTypes/IPersonData/IPersonData";

export default interface IUserProfile {
    personData: IPersonData;
    isThatMe?: boolean;
    isTemplate?: boolean;
}