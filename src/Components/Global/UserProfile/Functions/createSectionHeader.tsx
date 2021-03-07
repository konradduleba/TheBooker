import IAccountInfo from "../../../../GlobalTypes/IPersonData/IAccountInfo";

const createSectionHeader = ({ name, lastName }: IAccountInfo): string => {
    const userProfileName = `${name} ${lastName}`;
    const createSectionHeader = `${userProfileName}'s Profile`;

    return createSectionHeader;
}

export default createSectionHeader;