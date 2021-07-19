import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { createQueryBuilder, getConnection, Repository } from 'typeorm';
import { Cat } from './cat.entity';
import { UpdateCatDto } from './cat.model';

@Injectable()
export class CatService {
  constructor(@InjectRepository(Cat) private catRepository: Repository<Cat>) {}
  catArray: Cat[] = [];

  async postCat(name: string, age: string, user: User) {
    //Query by using Query builder
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Cat)
      .values([{ name: name, age: age, user: user }])
      .execute();

    //Query by using Repository
    // const cat = new Cat();
    // cat.name = name;
    // cat.age = age;
    // cat.user = user;
    // await this.catRepository.save(cat);
  }

  async getCat() {
    //Query by using Query builder
    const cat = await getConnection()
      .createQueryBuilder()
      .select('cat')
      .from(Cat, 'cat')
      .getMany();
    console.log(cat);
    return cat;

    //Query by using Repository
    // return await this.catRepository.find();
  }

  async getOwnCat() {
    //Query by using Query builder
    //Cat is many-to-one
    //User is one-to-many
    const user = await createQueryBuilder('Cat')
      .leftJoinAndSelect('Cat.user', 'user')
      .where('Cat.user.id = :name', { name: 2 })
      .getMany();
    return user;

    //Query by using Repository
    // return await this.catRepository.find({
    //   relations: ['user'],
    // });
  }

  async getCatById(id: string) {
    //Query by using Query builder
    const cat = await createQueryBuilder('Cat')
      .leftJoinAndSelect('Cat.user', 'user')
      .where('cat.id = :id', { id: id })
      .getMany();
    return cat;

    //Query by using Repository
    // return await this.catRepository.find({
    //   where: [{ id: id, name: 'eiei' }],
    //   relations: ['user'],
    // });
  }

  //delete function
  async deleteCatById(id: string) {
    //Query by using Query builder
    // await getConnection()
    //   .createQueryBuilder()
    //   .delete()
    //   .from(Cat)
    //   .where('id = :id', { id: id })
    //   .execute();
    // return 'Deleted Cat Id : ' + id + ' success';

    //Query by using Repository
    return this.catRepository.delete(id);
  }

  //Update function
  async updateCatById(id: string, updateCatDto: UpdateCatDto) {
    await getConnection()
      .createQueryBuilder()
      .update(Cat)
      .set({ name: updateCatDto.name, age: updateCatDto.age })
      .where('id = :id', { id: id })
      .execute();
    return 'Updated Id : ' + id + ' success';
  }
}
