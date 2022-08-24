import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';
import { Todo } from './todos.entity';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodosController {

	constructor (private todosService: TodosService) {}

	@Post()
	async create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
		return await this.todosService.create(createTodoDto);
	}

	@Get(':id')
	async findOne(@Param('id') id: number) {
		return await this.todosService.findOne(id);
	}

	@Get()
	async findAll(): Promise<Todo[]> {
		return await this.todosService.findAll();
	}

	@Put()
	async update(@Body() updateTodoDto: UpdateTodoDto): Promise<Todo> {
		return await this.todosService.update(updateTodoDto);
	}

	@Delete()
	async delete(@Body() id: number) {
		return await this.todosService.delete(id);
	}


}
