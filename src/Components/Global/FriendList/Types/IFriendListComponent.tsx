import IAccountInfo from "../../../../GlobalTypes/IPersonData/IAccountInfo";

export default interface IFriendListComponent {
    limit?: number;
    accountInfo: IAccountInfo;
}