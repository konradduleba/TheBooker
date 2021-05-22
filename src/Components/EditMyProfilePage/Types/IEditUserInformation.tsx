import IAccountInfo from "../../../GlobalTypes/IPersonData/IAccountInfo";
import IBasicInfo from "../../../GlobalTypes/IPersonData/IBasicInfo";
import IContactInfo from "../../../GlobalTypes/IPersonData/IContactInfo";
import IPersonalInfo from "../../../GlobalTypes/IPersonData/IPersonalInfo";
import ISaveEditField from "./ISaveEditField";

export default interface IEditUserInformation {
    data: IAccountInfo | IBasicInfo | IContactInfo | IPersonalInfo;
    header: string;
    setEditedData: (value: ISaveEditField) => void;
}