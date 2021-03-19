import IOfficers from "./IOfficers";

export default interface IGroupData {
    id: number;
    groupInfo: {
        name: string;
        description: string;
        picture: string;
    };
    officers: IOfficers[];
}