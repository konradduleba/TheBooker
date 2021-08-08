import IRandomPerson from "Components/Global/FriendList/Types/IRandomPerson";

export default interface IDisplayRandomPeople {
    inviteList: IRandomPerson[];
    acceptInvite: (username: string) => void;
}