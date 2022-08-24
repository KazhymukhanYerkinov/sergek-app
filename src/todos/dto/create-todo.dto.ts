import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
	@ApiProperty({ example: 'Take an internship in Sergek', description: 'Description of goals' })
	name: string;

	@ApiProperty({ example: 'false', description: 'completed or not' })
	complete: boolean;	
}