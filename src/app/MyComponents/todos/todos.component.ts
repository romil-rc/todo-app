import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  
  todos: Todo[];

  deleteTodo(todo: Todo){
    console.log('delete completed');
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

  todoAdd(todo: Todo){
    console.log(todo);
    this.todos.push(todo);
  }

  constructor(){
    this.todos = [
      {
        sNo: 1,
        title: 'First todo',
        priority: 'Low',
        desc: 'First desc',
        active: true
      },
      {
        sNo: 2,
        title: 'Second todo',
        priority: 'High',
        desc: 'Second desc',
        active: true
      },
      {
        sNo: 3,
        title: 'Third todo',
        priority: 'Low',
        desc: 'Third desc',
        active: true
      },
      {
        sNo: 4,
        title: 'Fourth todo',
        priority: 'High',
        desc: 'Fourth desc',
        active: true
      }
    ]
  }
}

