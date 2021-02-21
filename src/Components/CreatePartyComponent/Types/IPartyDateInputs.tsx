import { Control } from "react-hook-form";
import IPartyForm from "./IPartyForm";

export default interface IPartyDateInputs {
    label: string;
    name: string;
    control: Control<IPartyForm>;
    settings: {
        minDate: Date | undefined;
        dateFormat: string;
        showTimeSelect: boolean | undefined;
        showTimeSelectOnly: boolean | undefined;
        timeIntervals: number | undefined;
        timeCaption: string | undefined;
    };
    placeholder: string;
}