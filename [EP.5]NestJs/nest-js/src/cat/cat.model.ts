import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/user.entity';

export class CreateCatDto {
  @ApiProperty({ default: 'test' })
  name: string;

  @ApiProperty({ default: '21' })
  age: string;

  @ApiProperty({
    default: {
      id: 1,
      fullName: 'Babe',
      birthday: '13/04/1999',
    },
  })
  user: User;
}

export class UpdateCatDto {
  @ApiProperty({ default: 'test' })
  name: string;

  @ApiProperty({ default: '21' })
  age: string;
}
