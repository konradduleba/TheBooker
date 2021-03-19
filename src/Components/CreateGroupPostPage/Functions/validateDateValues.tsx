const validateDateValues = (dateValue: number): string => dateValue < 10 ? `0${dateValue}` : `${dateValue}`;

export default validateDateValues;