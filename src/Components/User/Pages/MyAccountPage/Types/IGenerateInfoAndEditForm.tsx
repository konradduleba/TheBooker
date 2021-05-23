import IInfoAndEditData from "./IInfoAndEditData";

export default interface IGenerateInfoAndEditForm {
    infoAndEditData: IInfoAndEditData;
    submitHandler: (value: IOnSubmit) => void
}

export interface IOnSubmit {
    [key: string]: string;
}