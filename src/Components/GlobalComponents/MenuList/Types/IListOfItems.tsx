import IMenuListTypes from "../../../../GlobalTypes/IMenuListTypes";

export default interface IListOfItems {
    menuList: IMenuListTypes[];
    isUserLoggedIn: boolean;
}
