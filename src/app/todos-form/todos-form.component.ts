import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.scss']
})
export class TodosFormComponent implements OnInit {

  title: string = ''

  @Output() addTodo = new EventEmitter<Todo>()

  constructor() { }

  ngOnInit(): void {
  }

  addTodos() {
    if (this.title !== '') {
      const todo: Todo = {
        title: this.title,
        id: Date.now(),
        completed: false
      }
      this.addTodo.emit(todo)
      this.title = ''
    }
  }

}
