import IMyParties from "../Types/IMyParties";
import ISeparateParties from "../Types/ISeparteParties";
import generateDayRange from "./generateDayRange";

const separatePartiesIntoGroups = (partyList: IMyParties[]): ISeparateParties => {
    const { halfOfTheDayBefore, halfOfTheDayAfter } = generateDayRange();

    const finishedParties: IMyParties[] = [];
    const actualParties: IMyParties[] = [];
    const incomingParties: IMyParties[] = [];

    partyList.map((party: IMyParties) => {
        const { monthDayYear, hourMinuteSecond } = party;
        const partyTime: number = Date.parse(`${monthDayYear} ${hourMinuteSecond}`);

        if (partyTime < halfOfTheDayBefore)
            return finishedParties.push(party);
        else if (partyTime > halfOfTheDayBefore && partyTime < halfOfTheDayAfter)
            return actualParties.push(party);

        return incomingParties.push(party);
    })

    return { incomingParties, actualParties, finishedParties };
}

export default separatePartiesIntoGroups;