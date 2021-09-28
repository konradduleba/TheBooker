import ESearchTypes from "../Enums/ESearchTypes";

export default interface ISearchForm {
    query: string;
    type: ESearchTypes;
}