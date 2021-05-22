import IPrivacyInfo from "../../../GlobalTypes/IPersonData/IPrivacyInfo";

export default interface IReturnedTypes {
    isSuccess: boolean;
    privacyInfo?: IPrivacyInfo;
    affected?: number;
}