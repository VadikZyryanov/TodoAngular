import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../app.component'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  @Input() todos: Todo[] = []
  @Output() deleteTodo = new EventEmitter<number>()
  @Output() onToggle = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  onChange(id: number) {
    this.onToggle.emit(id)
  }

  removeTodo(id: number) {
    this.deleteTodo.emit(id)
  }

}
