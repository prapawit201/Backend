import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  userArray: User[] = [];

  async postUser(fullName: string, birthday: string) {
    const user = new User();
    user.fullName = fullName;
    user.birthday = birthday;
    this.userArray.push(user);
    console.log(user);
    await this.usersRepository.save(user);
  }
}
