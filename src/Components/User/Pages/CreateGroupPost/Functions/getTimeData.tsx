import IGetTimeData from "../Types/IGetTimeData";
import validateDateValues from "./validateDateValues";

const getTimeData = (): IGetTimeData => {
    const actualDate = new Date();

    const minutes = validateDateValues(actualDate.getMinutes());
    const hours = validateDateValues(actualDate.getHours());
    const day = validateDateValues(actualDate.getDate());
    const month = validateDateValues(actualDate.getMonth() + 1);
    const year = actualDate.getFullYear();

    const time = `${hours}:${minutes}`;
    const date = `${month}/${day}/${year}`;

    return { time, date };
};

export default getTimeData;