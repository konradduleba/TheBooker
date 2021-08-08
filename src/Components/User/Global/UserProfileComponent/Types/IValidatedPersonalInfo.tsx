export default interface IValidatedPersonalInfo {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
    "Looking For": string | null;
    "Interested In": string | null;
    "Relationship Status": string | null;
    "Interests": string | null;
    "Favourite Music": string | null;
    "Favourite Movies": string | null;
    "About Me": string | null;
}