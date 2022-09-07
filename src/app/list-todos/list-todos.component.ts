import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: ToDo[]
  message: String

  constructor(private todoDataService: TodoDataService,
              private router: Router) { }

  ngOnInit(): void {
    this.refreshTodos()
  }

  updateTodo(id) {
    this.router.navigate([`todos/${id}`])
  }

  deleteTodo(id) {
    this.todoDataService.deleteTodoById('nishat', id).subscribe(
      response => {
        this.message = `Todo with id:${id} deleted successfully`;
        this.refreshTodos();
      }
    );
  }

  refreshTodos() {
    this.todoDataService.retrieveAllTodos('nishat').subscribe(
      response => {
        this.todos = response;
      }
    );
  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }

}

export class ToDo {
  constructor(public id: number,
              public description: string,
              public targetDate: Date,
              public completed: boolean) {

  }
}
