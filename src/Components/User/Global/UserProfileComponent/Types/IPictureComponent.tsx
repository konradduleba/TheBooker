import IAccountInfo from "Utils/Types/IAccountInfo";

export default interface IPictureComponent {
    accountInfo: IAccountInfo,
    isMyProfile: boolean | undefined;
}