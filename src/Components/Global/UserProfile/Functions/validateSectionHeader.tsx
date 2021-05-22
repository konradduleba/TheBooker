import IAccountInfo from "../../../../GlobalTypes/IPersonData/IAccountInfo";

const validateSectionHeader = (isThatMe: boolean | undefined, accountInfo: IAccountInfo): string => {
    const { name, lastname } = accountInfo;

    if (isThatMe)
        return 'My Profile'

    return `${name} ${lastname}'s Profile`
}

export default validateSectionHeader;