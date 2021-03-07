import PersonPhoto from '../../Assets/person.jpg';
import IUser from './Types/IUser';

const testSocialNetworkUsers: IUser[] = [{
    id: 0,
    photo: PersonPhoto,
    name: 'Konrad Dulęba',
    status: 'Student',
    year: 2021,
    field: 'IT',
    phone: '797 132 580'
},
{
    id: 1,
    photo: PersonPhoto,
    name: 'Konrad Dukęba',
    status: 'Absolwent',
    year: 2018,
    field: 'Medycyna',
    phone: '123 456 789'
},
{
    id: 2,
    photo: PersonPhoto,
    name: 'Sraczkeusz Sraczyński',
    status: 'Student',
    year: 2010,
    field: 'Modli się by zdać xD',
    phone: '888 888 888'
}]

export default testSocialNetworkUsers;