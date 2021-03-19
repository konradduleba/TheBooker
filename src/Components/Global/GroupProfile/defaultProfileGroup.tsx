import IGroupData from "./Types/IGroupData";
import Person from '../../../Assets/person.jpg';

const defaultProfileGroup: IGroupData = {
    id: 1,
    groupInfo: {
        name: "GroupName",
        description: "GroupName Description",
        picture: Person
    },
    officers: []
}

export default defaultProfileGroup;

