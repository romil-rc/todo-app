import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  @Output()
  addTodo: EventEmitter<Todo> = new EventEmitter();

  title!: string;
  desc!: string;
  priority!: string;

  onSubmit(){
    const rand = Math.floor((Math.random() * 100) + 1);
    const todo: Todo = {
      sNo: rand,
      title: this.title,
      priority: this.priority,
      desc: this.desc,
      active: true
    }
    this.addTodo.emit(todo);
  }

}
