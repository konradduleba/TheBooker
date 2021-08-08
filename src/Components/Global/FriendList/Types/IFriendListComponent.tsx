import IAccountInfo from "../../../../Utils/Types/IAccountInfo";

export default interface IFriendListComponent {
    limit?: number;
    accountInfo: IAccountInfo;
    isThatMe?: boolean;
}