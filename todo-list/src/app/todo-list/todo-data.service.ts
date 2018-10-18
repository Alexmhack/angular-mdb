import { Injectable } from '@angular/core';

import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId = 0;

  // placeholder for todo's
  todos: Todo[] = [];

  constructor() { }

  // simulate POST /todos
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}):  Todo | any {
    const todo = this.getTodoById(id) ;
    if (!todo) {
      return this;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number):  Todo | any {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Simulate GET /todos/:category
  getTodoByCategory(id: number): Todo[] {
    return this.todos
      .filter(todo => todo.category === id);
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    const updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

}
