import IBasicInfo from "../../../../GlobalTypes/IPersonData/IBasicInfo";
import IContactInfo from "../../../../GlobalTypes/IPersonData/IContactInfo";
import IValidatedAccountInfo from "./IValidatedAccountInfo";
import IValidatedPersonalInfo from "./IValidatedPersonalInfo";

export default interface IValidateEntityVisibility {
    header: string;
    entities: IValidatedAccountInfo | IBasicInfo | IContactInfo | IValidatedPersonalInfo;
}