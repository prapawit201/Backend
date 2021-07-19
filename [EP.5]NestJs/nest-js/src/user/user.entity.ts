import { Cat } from 'src/cat/cat.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  fullName: string;

  @Column()
  birthday: string;

  @OneToMany(() => Cat, (cat) => cat.user)
  cats: Cat[];
}
