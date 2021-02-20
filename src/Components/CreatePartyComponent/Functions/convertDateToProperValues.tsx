import EDateConvertTypes from "../Enums/EDateConvertTypes";
import formatDateNumbers from "./formatDateNumbers";

const convertDateToProperValues = (dateInGMTformat: string, dateType: EDateConvertTypes): string => {
    const dateInMilliseconds = new Date(dateInGMTformat);

    const year: number = dateInMilliseconds.getFullYear();
    const month: string = formatDateNumbers(dateInMilliseconds.getMonth() + 1);
    const day: string = formatDateNumbers(dateInMilliseconds.getDate());
    const hour: string = formatDateNumbers(dateInMilliseconds.getHours());
    const minutes: string = formatDateNumbers(dateInMilliseconds.getMinutes());
    const seconds: string = formatDateNumbers(dateInMilliseconds.getSeconds());

    const properDate = dateType === EDateConvertTypes.HOURminuteSECOND ? `${hour}:${minutes}:${seconds}` : `${month}/${day}/${year}`;

    return properDate;
}

export default convertDateToProperValues;