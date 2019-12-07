import { TaskList } from "../components/taskList";
import { InputForm } from "../components/inputForm";
import { Task } from "../components/task";
import { getToDo, addToDo, deleteToDo } from "../utilities/todo-service";
import { Login } from "../components/login";

class Main {
    constructor() {
        let inputForm = new InputForm();
        let login = new Login();
        let taskList = new TaskList();

        this.node = document.createElement('main');
        this.node.appendChild(inputForm.getNode());
        this.node.appendChild(login.getNode());
        this.node.appendChild(taskList.getNode());

        inputForm.setBtnAddOnClick(function () {
            let text = inputForm.txtTitle.value;
            text = text.trim();
            if (text == '') return;
            addToDo(login.username.value, text);
            let task = new Task(text);

            task.setBtnDeleteClickEvent(() => {
                console.log('Mjau!');
                deleteToDo(login.username.value, task.title).then(data => console.log(data));
               task.deleteItem();
            });
            taskList.addTask(task);
        });

        login.btnSetEventOnClick(function () {
            let username = login.username.value;
            username = username.trim();
            getToDo(username).then(data => {
                let items = data.items;
                taskList.emptyList();
                items.forEach(item => {
                    let task = new Task(item.title);
                    task.setBtnDeleteClickEvent(() => {
                        deleteToDo(login.username.value, task.title).then(data => console.log(data));
                        task.deleteItem();
                    });
                    taskList.addTask(task);
                });
            })
        });
    }
    getNode() {
        return this.node;
    }

}

export {
    Main
}