import Teacher from './teacher';
import { countItems, Gender } from '../services/utils';

const teacherLists = [
    {
        firstName: 'Prvi',
        lastName: 'Profesor',
        age: 40,
        gender: 0,
        yearsOfTeaching: 10
    },
    {
        firstName: 'Drugi',
        lastName: 'Profesor',
        age: 52,
        gender: 1,
        yearsOfTeaching: 12
    },
    {
        firstName: 'Treci',
        lastName: 'Profesor',
        age: 50,
        gender: 1,
        yearsOfTeaching: 7
    },
    {
        firstName: 'Cetvrti',
        lastName: 'Profesor',
        age: 42,
        gender: 0,
        yearsOfTeaching: 11
    }
];

export default class Teachers {
    constructor() {}
        
    getTeachers() {
        let html = '<ul>';
        teacherLists.forEach(teacher => {
            let item = new Teacher(teacher.firstName, teacher.lastName, teacher.age, Gender[teacher.gender], teacher.yearsOfTeaching);
            html += item.getTeacher();
        });
        html += '</ul>';
        console.log('init teachers', countItems(teacherLists));
        return html;
    }
}