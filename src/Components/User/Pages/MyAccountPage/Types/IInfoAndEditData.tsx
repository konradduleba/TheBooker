import IFormData from "./IFormData";
import IInfoData from "./IInfoData";

export default interface IInfoAndEditData {
    info: IInfoData;
    form: {
        className?: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        handleSubmit: any;
        fields: IFormData[];
    }
}