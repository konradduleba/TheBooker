import IMyParties from "./IMyParties";

export default interface ISeparateParties {
    incomingParties: IMyParties[];
    actualParties: IMyParties[];
    finishedParties: IMyParties[];
}