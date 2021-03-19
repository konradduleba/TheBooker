import IGroupData from "./Types/IGroupData";
import Person from '../../../Assets/person.jpg';

const testProfileGroup: IGroupData = {
    id: 1,
    groupInfo: {
        name: "GroupName",
        description: "GroupName Description",
        picture: Person
    },
    officers: [{
        id: 1,
        label: 'founder',
        value: 'Konrad Dulęba'
    },
    {
        id: 2,
        label: 'co-founder',
        value: 'Konrad Dulęba'
    }]
}

export default testProfileGroup;

