import IRecentDiscussionContent from "./Types/IRecentDiscussionContent";

const testRecentDiscussion: IRecentDiscussionContent[] = [{
    id: 1,
    date: "05/05/2021",
    time: "15:05",
    title: "Testujemy posty",
    authorData: {
        id: 3,
        name: "Konrad Dulęba"
    },
    description: "Testujemy hard coded wpis, zobaczymy co z tego będzie, testowanie rozmiary heueheueheeheeu",
    answers: [{
        id: 0,
        date: "05/05/2021",
        time: "15:10",
        authorData: {
            id: 1,
            name: "Jędrzej Knapik"
        },
        message: "ugabugaugabuga covid kaszle uga buga"
    },
    {
        id: 1,
        date: "05/05/2021",
        time: "15:12",
        authorData: {
            id: 2,
            name: "Konrad Dulęba"
        },
        message: "Zamknij ryj ten wyżej"
    }]
},
{
    id: 2,
    date: "01/03/2021",
    time: "12:05",
    title: "heueheeuehu heuehe",
    authorData: {
        id: 1,
        name: "Sraczeusz Sraczyński"
    },
    description: "Testujemy hard coded wpis, zobaczymy co z tego będzie, testowanie rozmiary heueheueheeheeu",
    answers: []
}];

export default testRecentDiscussion;