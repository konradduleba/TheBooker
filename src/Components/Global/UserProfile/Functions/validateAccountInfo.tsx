import IAccountInfo from "../../../../GlobalTypes/IPersonData/IAccountInfo";
import IValidatedAccountInfo from "../Types/IValidatedAccountInfo";
import changeDateFormat from "./changeDateFormat";

const validateAccountInfo = ({ name, lastname, memberSince, lastUpdate }: IAccountInfo): IValidatedAccountInfo => {
    const fullName = `${name} ${lastname}`;
    const validatedMemberSince = memberSince ? changeDateFormat(memberSince) : '';
    const validatedLastUpdate = lastUpdate ? changeDateFormat(lastUpdate) : '';

    return {
        "Name": fullName,
        "Member Since": validatedMemberSince,
        "Last Update": validatedLastUpdate,
    }
};

export default validateAccountInfo;