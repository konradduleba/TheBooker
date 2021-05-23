import IMenuListTypes from "../../../../Routes/Types/IMenuListTypes";

export default interface IListOfItems {
    menuList: IMenuListTypes[];
    isUserLoggedIn: boolean;
}
