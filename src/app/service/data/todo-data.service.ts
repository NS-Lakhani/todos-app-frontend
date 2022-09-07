import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(username) {
    return this.http.get<ToDo[]>(`http://localhost:8080/users/${username}/todos`)
  }

  deleteTodoById(username, id) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  retrieveTodoById(username, id) {
    return this.http.get<ToDo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  updateTodo(username, todo) {
    return this.http.put<ToDo>(`http://localhost:8080/users/${username}/todos`,todo)
  }
}
