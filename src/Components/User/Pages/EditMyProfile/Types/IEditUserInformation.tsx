import IAccountInfo from "../../../../../Utils/Types/IAccountInfo";
import IBasicInfo from "../../../../../Utils/Types/IBasicInfo";
import IContactInfo from "../../../../../Utils/Types/IContactInfo";
import IPersonalInfo from "../../../../../Utils/Types/IPersonalInfo";
import ISaveEditField from "./ISaveEditField";

export default interface IEditUserInformation {
    data: IAccountInfo | IBasicInfo | IContactInfo | IPersonalInfo;
    header: string;
    setEditedData?: (value: ISaveEditField) => void;
}