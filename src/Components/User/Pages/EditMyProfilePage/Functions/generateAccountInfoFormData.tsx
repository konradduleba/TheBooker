import IAccountInfo from '../../../../../Utils/Types/IAccountInfo';
import IBasicInfo from '../../../../../Utils/Types/IBasicInfo';
import IContactInfo from '../../../../../Utils/Types/IContactInfo';
import IPersonalInfo from '../../../../../Utils/Types/IPersonalInfo';
import fieldArray from '../Assets/fieldArray';
import IReturnedEditValues from "../Types/IReturnedEditValues";

const generateEditArrayValues = (data: IAccountInfo | IBasicInfo | IContactInfo | IPersonalInfo): IReturnedEditValues[] => {
    const validatedValues = [];

    for (const [key, fieldValue] of Object.entries(data)) {
        const findLabel = fieldArray.find(({ keyValue }) => keyValue === key);

        if (findLabel) {
            const label = findLabel.label;
            const value = fieldValue ? fieldValue : '';
            const required = !!findLabel.required;

            validatedValues.push({ label, key, value, required });
        }
    }

    return validatedValues;
}

export default generateEditArrayValues;