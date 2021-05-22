const changeDateFormat = (date: Date): string => {
    const newDate = new Date(date);

    const day = validateDateValue(newDate.getDate());
    const month = validateDateValue(newDate.getMonth() + 1);
    const year = newDate.getFullYear();

    return `${month}/${day}/${year}`
}

export default changeDateFormat;

const validateDateValue = (dateValue: number): string | number => dateValue < 10 ? `0${dateValue}` : dateValue;