import { ApiProperty } from '@nestjs/swagger';

export class DeleteTodoDto {

	@ApiProperty({ example: '1', description: 'Unique identificator' })
	id: number;
	
}