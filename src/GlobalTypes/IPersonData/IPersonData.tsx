import IAccountInfo from "./IAccountInfo";
import IBasicInfo from "./IBasicInfo";
import IContactInfo from "./IContactInfo";
import IPersonalInfo from "./IPersonalInfo";
import IPrivacyInfo from "./IPrivacyInfo";

export default interface IPersonData {
    ID: number;
    accountInfo: IAccountInfo;
    basicInfo: IBasicInfo;
    contactInfo: IContactInfo;
    personalInfo: IPersonalInfo;
    privacyInfo: IPrivacyInfo;
}