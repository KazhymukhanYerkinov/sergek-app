import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { DeleteTodoDto } from './dto/delete-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './todos.entity';

@Injectable()
export class TodosService {

	constructor(@InjectRepository(Todo) private todoRepository: Repository<Todo>) {}

	async create(createTodoDto: CreateTodoDto): Promise<Todo> {
		return await this.todoRepository.save({...createTodoDto});
	}

	async findOne(id: number): Promise<Todo> {
		return await this.todoRepository.findOneBy({ id });
	}

	async findAll(): Promise<Todo[]> {
		return await this.todoRepository.find();
	}

	async update(updateTodoDto: UpdateTodoDto): Promise<Todo> {
		await this.todoRepository.update({ id: updateTodoDto.id}, { ...updateTodoDto });
		return await this.findOne(updateTodoDto.id);
	}

	async delete(deleteTodoDto: DeleteTodoDto): Promise<number> {
		await this.todoRepository.delete({ id: deleteTodoDto.id });
		return deleteTodoDto.id;
	}

}
