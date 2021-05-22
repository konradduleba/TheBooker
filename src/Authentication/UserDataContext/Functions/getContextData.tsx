import getUserData from "../../../Components/Global/Login/Functions/getUserData";
import IUserDataContainer from "../types/IUserDataContainer";

const getContextData = async (): Promise<IUserDataContainer> => {
    const data = await getUserData();

    if (!data)
        return {
            isLoggedIn: false,
        }

    const { userData } = data;

    return {
        isLoggedIn: true,
        userData
    }
}

export default getContextData;