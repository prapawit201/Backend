import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.entity';
import { v4 } from 'uuid';

@Injectable()
export class TodoService {
  todoArray: Todo[] = [];

  postTodo(tittle: string, description: string) {
    const todo = new Todo();
    todo.id = v4();
    todo.tittle = tittle;
    todo.description = description;
    this.todoArray.push(todo);
    console.log(this.todoArray);
  }

  getTodo() {
    return this.todoArray;
  }

  removeTodo(id: string) {
    const found = this.todoArray.find((item) => item.id === id);
    if (!found) {
      throw new NotFoundException('Can not found by Id : ' + id);
    }
    this.todoArray = this.todoArray.filter((item) => item.id !== id);
    return this.todoArray;
  }
}
