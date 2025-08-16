import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
 todos = ['Task 1', 'Task 2'];

  unusedVariable = 'This is never used'; // 🔴 Dead Code

  logTodos() {
    console.log(this.todos);
  }

  duplicateFunction1() {
    console.log('Duplicate logic');
  }

  duplicateFunction2() {
    console.log('Duplicate logic'); // 🔴 Duplicate Code
  }
}
