import IRandomPerson from "../../Global/FriendList/Types/IRandomPerson";

export default interface IPartyForm {
    name: string;
    photo: string;
    monthDayYear: string;
    hourMinuteSecond: string;
    selectedFriends: IRandomPerson[];
}

//photo: string | FileList;