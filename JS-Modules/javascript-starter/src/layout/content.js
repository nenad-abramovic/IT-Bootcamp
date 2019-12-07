import {Students} from '../components'

class Content{
    constructor(){
        console.log('Init content');
    }
    getHtml(){
        const students = new Students();
        let html = '<div>';
         html +=  students.getStudents();
         html += '</div>';
         console.log('Init content');
         return html;
         
    }
}

export default Content;