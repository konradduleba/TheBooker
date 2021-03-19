import IAnswers from "./IAnswers";

export default interface IRecentDiscussionContent {
    id: number;
    date: string;
    time: string;
    title: string;
    authorData: {
        id: number;
        name: string;
    },
    description: string;
    answers: IAnswers[];
}