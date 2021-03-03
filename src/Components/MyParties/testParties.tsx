//this group list will be erased when backend comes

import Person from '../../Assets/person.jpg';
import IMyParties from './Types/IMyParties';

const testGroups: IMyParties[] = [{
    ID: 0,
    name: 'Testowa impreza',
    photo: Person,
    monthDayYear: '01/01/2021',
    hourMinuteSecond: '23:54:00'
},
{
    ID: 1,
    name: 'Urodziny mojej kochanej Natalki',
    photo: Person,
    monthDayYear: '01/20/2021',
    hourMinuteSecond: '21:00:53'
},
{
    ID: 2,
    name: 'Urodziny Sraczki',
    photo: Person,
    monthDayYear: '02/16/2021',
    hourMinuteSecond: '12:04:22'
},
{
    ID: 3,
    name: 'Moje Urodziny',
    photo: Person,
    monthDayYear: '02/27/2021',
    hourMinuteSecond: '08:33:11'
},
{
    ID: 4,
    name: 'Dzisiaj',
    photo: Person,
    monthDayYear: '02/08/2021',
    hourMinuteSecond: '22:11:32'
}];


export default testGroups;