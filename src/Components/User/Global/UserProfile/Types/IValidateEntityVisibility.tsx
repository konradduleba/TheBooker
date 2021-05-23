import IBasicInfo from "../../../../../Utils/Types/IBasicInfo";
import IContactInfo from "../../../../../Utils/Types/IContactInfo";
import IValidatedAccountInfo from "./IValidatedAccountInfo";
import IValidatedPersonalInfo from "./IValidatedPersonalInfo";

export default interface IValidateEntityVisibility {
    header: string;
    entities: IValidatedAccountInfo | IBasicInfo | IContactInfo | IValidatedPersonalInfo;
}