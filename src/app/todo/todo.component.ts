import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: ToDo

  constructor(private todoDataService: TodoDataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new ToDo(this.id, '', new Date(), false);

    console.log(this.id !== -1)
    if (this.id != -1) {
      console.log('yay')
      this.todoDataService.retrieveTodoById('nishat', this.id).subscribe(
        data => this.todo = data
      )
    }
  }

  updateTodo() {
    console.log(this.todo)
    this.todoDataService.updateTodo('nishat', this.todo).subscribe(
      data => {
        this.todo = data;
        this.router.navigate(['todos']);
      }
    );
  }

}
