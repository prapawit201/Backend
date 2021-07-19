import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { TodoService } from './todo.service';

@Controller('todo')
@ApiTags('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getTodo() {
    return this.todoService.getTodo();
  }

  @Post()
  postTodo(
    @Body('tittle') tittle: string,
    @Body('description') description: string,
  ) {
    this.todoService.postTodo(tittle, description);
    return tittle + ' : ' + description;
  }

  @Delete('/delete/:id')
  deleteTodo(@Param('id') id: string) {
    console.log('deleted Id : ' + id + ' was successfully');
    return this.todoService.removeTodo(id);
  }

  @Get('/:id')
  async getTodoById(@Param('id', new ParseUUIDPipe()) id: string) {
    return "The Id that's get is : " + id;
  }

  @Put('/update/:id')
  updateTodoById(@Param('id') id: string) {
    return 'The Id was Updated is : ' + id;
  }
}
