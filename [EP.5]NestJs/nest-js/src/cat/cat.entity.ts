import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  @ApiProperty({type:'integer' , example:1})
  id: number;

  @Column({ length: 25 })
  @ApiProperty({type:'string' , example:"babe"})
  name: string;

  @Column()
  @ApiProperty({type:'string' , example:"21"})
  age: string;

  @ManyToOne(() => User, (user) => user.cats)
  user: User;
}
