import IAccountInfo from "Utils/Types/IAccountInfo";

export default interface ISendMessageOrPoke {
    isOnFriendList?: boolean;
    inviteStatus?: boolean;
    accountInfo: IAccountInfo;
}