export default interface IAnswers {
    id: number;
    date: string;
    time: string;
    authorData: {
        id: number;
        name: string;
    },
    message: string;
}