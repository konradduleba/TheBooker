export default interface IActualProfilePicture {
    picture: string;
    setNewProfilePicture: (value: Blob | null | string) => void;
}