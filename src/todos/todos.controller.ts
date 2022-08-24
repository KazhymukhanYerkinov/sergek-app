import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';
import { Todo } from './todos.entity';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DeleteTodoDto } from './dto/delete-todo.dto';

@Controller('todos')
export class TodosController {

	constructor (private todosService: TodosService) {}

	@ApiOperation({ summary: 'Create TO-DO' })
	@ApiResponse({ status: 200, type: Todo })
	@Post()
	async create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
		return await this.todosService.create(createTodoDto);
	}

	@ApiOperation({ summary: 'Get TO-DO by id' })
	@ApiResponse({ status: 200, type: Todo })
	@Get(':id')
	async findOne(@Param('id') id: number) {
		return await this.todosService.findOne(id);
	}

	@ApiOperation({ summary: 'Get all TO-DO' })
	@ApiResponse({ status: 200, type: [Todo] })
	@Get()
	async findAll(): Promise<Todo[]> {
		return await this.todosService.findAll();
	}

	@ApiOperation({ summary: 'Update TO-DO' })
	@ApiResponse({ status: 200, type: Todo })
	@Put()
	async update(@Body() updateTodoDto: UpdateTodoDto): Promise<Todo> {
		return await this.todosService.update(updateTodoDto);
	}

	@ApiOperation({ summary: 'Delete TO-DO' })
	@ApiResponse({ status: 200, type: DeleteTodoDto })
	@Delete()
	async delete(@Body() deleteTodoDto: DeleteTodoDto) {
		return await this.todosService.delete(deleteTodoDto);
	}
}
