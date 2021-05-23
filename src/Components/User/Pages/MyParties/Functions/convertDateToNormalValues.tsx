import IDisplayOptions from "../Types/IDisplayOptions";

const convertDateToNormalValues = (date: string): string => {
    const language = 'en-US';
    const displayOptions: IDisplayOptions = {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    };

    const month: number = parseInt(date.slice(0, 2)) - 1;
    const day: number = parseInt(date.slice(3, 5));
    const year: number = parseInt(date.slice(6, 10));

    const convertedDate: Date = new Date(year, month, day);
    const displayValues: string = convertedDate.toLocaleDateString(language, displayOptions);

    return displayValues;
};

export default convertDateToNormalValues;