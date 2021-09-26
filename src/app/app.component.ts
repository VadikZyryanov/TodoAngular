import { Component } from '@angular/core';

export interface Todo {
  id: number
  title: string
  completed: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'ToDo List'

  public todos: Todo[] = []

  onToggle(id: number) {
    const index = this.todos.findIndex(t => t.id === id)
    this.todos[index].completed = !this.todos[index].completed
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id)
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
  }
}
