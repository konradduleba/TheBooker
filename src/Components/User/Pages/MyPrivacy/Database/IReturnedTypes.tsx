import IPrivacyInfo from "../../../../../Utils/Types/IPrivacyInfo";

export default interface IReturnedTypes {
    isSuccess: boolean;
    privacyInfo?: IPrivacyInfo;
    affected?: number;
}