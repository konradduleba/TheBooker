const formatDateNumbers = (dateNumber: number): string => dateNumber < 10 ? `0${dateNumber}` : `${dateNumber}`;

export default formatDateNumbers;