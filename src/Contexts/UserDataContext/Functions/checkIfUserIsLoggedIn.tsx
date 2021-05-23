import IUserDataContainer from "../types/IUserDataContainer";
import getLocalStorageData from "./getLocalStorageData";

const checkIfUserIsLoggedIn = (): IUserDataContainer => {
    const data = getLocalStorageData();

    if (data === 'true')
        return { isLoggedIn: true };

    return { isLoggedIn: false }
};

export default checkIfUserIsLoggedIn;