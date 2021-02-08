import IGenerateDayRange from "../Types/IGenerateDayRange";

const generateDayRange = (): IGenerateDayRange => {
    const actualTime: number = new Date().getTime();
    const halfOfTheDay: number = 86400000 / 2;
    const halfOfTheDayBefore: number = actualTime - halfOfTheDay;
    const halfOfTheDayAfter: number = actualTime + halfOfTheDay;

    return { halfOfTheDayBefore, halfOfTheDayAfter }
}

export default generateDayRange;