import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('Todo')
export class Todo {

	@ApiProperty({ example: '1', description: 'Unique identificator' })
	@PrimaryGeneratedColumn()
	id: number;

	@ApiProperty({ example: 'Take an internship in Sergek', description: 'Description of goals' })
	@Column()
	name: string;

	@ApiProperty({ example: 'false', description: 'completed or not' })
	@Column({ default: false })
	complete: boolean;
	
}