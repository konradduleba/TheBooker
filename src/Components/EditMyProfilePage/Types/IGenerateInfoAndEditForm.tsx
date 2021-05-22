import IReturnedEditValues from "./IReturnedEditValues";
import ISaveEditField from "./ISaveEditField";

export default interface IGenerateInfoAndEditForm {
    formData: IReturnedEditValues;
    setEditedData: (value: ISaveEditField) => void;
}